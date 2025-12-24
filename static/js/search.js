(function() {
    'use strict';

    var config = window.searchConfig || {
        lang: 'es',
        noResults: 'No se encontraron resultados'
    };

    var searchToggle, searchBox, searchInput, searchResults;
    var documents = [];
    var debounceTimer = null;

    var DEBOUNCE_DELAY = 300;
    var MAX_RESULTS = 8;

    function init() {
        searchToggle = document.querySelector('.search-toggle');
        searchBox = document.querySelector('.search-box');
        searchInput = document.getElementById('search-input');
        searchResults = document.getElementById('search-results');

        if (!searchToggle || !searchInput || !searchResults) {
            return;
        }

        loadSearchIndex();

        searchToggle.addEventListener('click', toggleSearch);
        searchInput.addEventListener('input', handleInput);
        searchInput.addEventListener('keydown', handleKeydown);
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('keydown', handleEscape);
    }

    function loadSearchIndex() {
        var indexFile = '/search_index.' + config.lang + '.js';

        var script = document.createElement('script');
        script.src = indexFile;
        script.onload = function() {
            if (typeof window.searchIndex !== 'undefined') {
                // Extract documents from the index
                var docs = window.searchIndex.documentStore.docs;
                for (var id in docs) {
                    if (docs.hasOwnProperty(id)) {
                        documents.push(docs[id]);
                    }
                }
            }
        };
        document.head.appendChild(script);
    }

    function toggleSearch(e) {
        e.stopPropagation();
        var isOpen = searchBox.classList.toggle('active');
        searchToggle.classList.toggle('active', isOpen);
        searchToggle.setAttribute('aria-expanded', isOpen);
        searchBox.setAttribute('aria-hidden', !isOpen);

        if (isOpen) {
            setTimeout(function() {
                searchInput.focus();
            }, 50);
        } else {
            clearSearch();
        }
    }

    function closeSearch() {
        searchBox.classList.remove('active');
        searchToggle.classList.remove('active');
        searchToggle.setAttribute('aria-expanded', 'false');
        searchBox.setAttribute('aria-hidden', 'true');
        clearSearch();
    }

    function clearSearch() {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
    }

    function handleInput(e) {
        var query = e.target.value.trim();

        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        debounceTimer = setTimeout(function() {
            performSearch(query);
        }, DEBOUNCE_DELAY);
    }

    function performSearch(query) {
        if (documents.length === 0 || query.length < 2) {
            searchResults.innerHTML = '';
            searchResults.classList.remove('active');
            return;
        }

        var queryLower = query.toLowerCase();
        var results = [];

        for (var i = 0; i < documents.length; i++) {
            var doc = documents[i];
            var title = (doc.title || '').toLowerCase();
            var description = (doc.description || '').toLowerCase();

            var titleMatch = title.indexOf(queryLower) !== -1;
            var descMatch = description.indexOf(queryLower) !== -1;

            if (titleMatch || descMatch) {
                results.push({
                    doc: doc,
                    score: titleMatch ? 2 : 1
                });
            }
        }

        // Sort by score (title matches first)
        results.sort(function(a, b) { return b.score - a.score; });

        displayResults(results.slice(0, MAX_RESULTS), query);
    }

    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">' + config.noResults + '</div>';
            searchResults.classList.add('active');
            return;
        }

        var html = results.map(function(result) {
            var doc = result.doc;
            var title = highlightMatch(doc.title || '', query);
            var description = doc.description
                ? highlightMatch(truncate(doc.description, 120), query)
                : '';
            var url = doc.id || '';

            return '<a href="' + escapeHtml(url) + '" class="search-result-item" role="option">' +
                '<div class="search-result-title">' + title + '</div>' +
                (description ? '<div class="search-result-description">' + description + '</div>' : '') +
                '</a>';
        }).join('');

        searchResults.innerHTML = html;
        searchResults.classList.add('active');
    }

    function highlightMatch(text, query) {
        if (!text || !query) return escapeHtml(text);

        var escaped = escapeHtml(text);
        var queryWords = query.toLowerCase().split(/\s+/);

        var result = escaped;
        queryWords.forEach(function(word) {
            if (word.length >= 2) {
                var regex = new RegExp('(' + escapeRegex(word) + ')', 'gi');
                result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
            }
        });

        return result;
    }

    function truncate(text, maxLength) {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    }

    function escapeHtml(text) {
        if (!text) return '';
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function handleKeydown(e) {
        var items = searchResults.querySelectorAll('.search-result-item');
        var activeItem = searchResults.querySelector('.search-result-item:focus');
        var currentIndex = Array.from(items).indexOf(activeItem);

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < items.length - 1) {
                    items[currentIndex + 1].focus();
                } else if (items.length > 0) {
                    items[0].focus();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) {
                    items[currentIndex - 1].focus();
                }
                break;
            case 'Enter':
                if (activeItem) {
                    window.location.href = activeItem.href;
                }
                break;
        }
    }

    function handleOutsideClick(e) {
        var searchContainer = document.querySelector('.search-container');
        if (searchContainer && !searchContainer.contains(e.target)) {
            closeSearch();
        }
    }

    function handleEscape(e) {
        if (e.key === 'Escape' && searchBox.classList.contains('active')) {
            closeSearch();
            searchToggle.focus();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

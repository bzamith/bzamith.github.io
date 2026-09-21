(function () {
  'use strict';

  var navToggle = document.querySelector('.nav-toggle');
  var navigation = document.querySelector('.site-navigation');

  if (navToggle && navigation) {
    navToggle.addEventListener('click', function () {
      var isOpen = navigation.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  var conceptsPage = document.body.classList.contains('page-data-science-concepts') ||
    document.body.classList.contains('page-software-engineering-concepts');

  if (conceptsPage) {
    var conceptsContent = document.querySelector('.page-content');
    var topicHeadings = conceptsContent ? Array.from(conceptsContent.querySelectorAll(':scope > h2')) : [];

    topicHeadings.forEach(function (heading) {
      if (heading.textContent.trim().toLowerCase() === 'topics') {
        heading.classList.add('topics-index-title');
        var topicsList = heading.nextElementSibling;
        if (topicsList && topicsList.tagName === 'UL') topicsList.classList.add('topics-index');
        return;
      }

      var details = document.createElement('details');
      details.className = 'concept-topic';
      details.id = heading.id;

      var summary = document.createElement('summary');
      var title = document.createElement('span');
      title.className = 'concept-topic-title';
      title.textContent = heading.textContent;
      summary.appendChild(title);

      var topicBody = document.createElement('div');
      topicBody.className = 'concept-topic-body';
      var questionCount = 0;
      var node = heading.nextElementSibling;

      while (node && node.tagName !== 'H2') {
        var next = node.nextElementSibling;
        if (node.tagName === 'H3') questionCount += 1;
        topicBody.appendChild(node);
        node = next;
      }

      var count = document.createElement('span');
      count.className = 'concept-topic-count';
      count.textContent = questionCount + (questionCount === 1 ? ' question' : ' questions');
      summary.appendChild(count);

      details.appendChild(summary);
      details.appendChild(topicBody);
      heading.replaceWith(details);
    });

    function openTopicForHash() {
      if (!window.location.hash) return;
      var target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (!target) return;
      var topic = target.matches('.concept-topic') ? target : target.closest('.concept-topic');
      if (topic) topic.open = true;
    }

    document.addEventListener('click', function (event) {
      var link = event.target.closest('.topics-index a');
      if (!link) return;
      var target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (target && target.matches('.concept-topic')) target.open = true;
    });

    window.addEventListener('hashchange', openTopicForHash);
    openTopicForHash();
  }

  if (document.body.classList.contains('page-talks')) {
    document.querySelectorAll('.page-content > ul > li').forEach(function (item) {
      var lines = [];
      var line = document.createElement('div');
      var content = item;

      // Markdown wraps items in a paragraph when a list contains blank lines.
      // Parse that paragraph so multi-item years keep the same timeline layout.
      if (item.children.length === 1 && item.firstElementChild.tagName === 'P') {
        content = item.firstElementChild;
      }

      Array.from(content.childNodes).forEach(function (node) {
        if (node.nodeName === 'BR') {
          if (line.childNodes.length) lines.push(line);
          line = document.createElement('div');
        } else {
          line.appendChild(node);
        }
      });

      if (line.childNodes.length) lines.push(line);
      item.replaceChildren();
      item.classList.add('talk-entry');

      lines.forEach(function (itemLine, index) {
        var classNames = ['talk-title', 'talk-event', 'talk-location', 'talk-date'];
        itemLine.className = classNames[index] || 'talk-detail';
        item.appendChild(itemLine);
      });
    });
  }

  var filterButtons = document.querySelectorAll('.filter-btn');
  var bookBelts = document.querySelectorAll('.book-belt');

  if (!filterButtons.length) return;

  document.querySelectorAll('.book-item').forEach(function (item) {
    if (!item.dataset.type) {
      if (item.querySelector('.book-tag-library')) item.dataset.type = 'library';
      if (item.querySelector('.book-tag-kindle')) item.dataset.type = 'kindle';
    }

    if (!item.dataset.topics) {
      var topics = [];
      ['genai', 'xai', 'others', 'recommender', 'career', 'engineering', 'statistics', 'ml'].forEach(function (topic) {
        if (item.querySelector('.book-tag-' + topic)) topics.push(topic);
      });
      item.dataset.topics = topics.join(' ');
    }
  });

  function selectedFilters() {
    var selected = { status: 'all', type: 'all', topic: 'all' };
    document.querySelectorAll('.filter-btn.active').forEach(function (button) {
      selected[button.dataset.filter] = button.dataset.value;
    });
    return selected;
  }

  function filterBooks() {
    var selected = selectedFilters();

    bookBelts.forEach(function (belt) {
      var statusMatches = selected.status === 'all' || belt.dataset.status === selected.status;
      var visibleItems = 0;

      belt.querySelectorAll('.book-item').forEach(function (item) {
        var typeMatches = selected.type === 'all' || item.dataset.type === selected.type;
        var topics = (item.dataset.topics || '').split(' ');
        var topicMatches = selected.topic === 'all' || topics.indexOf(selected.topic) !== -1;
        var visible = statusMatches && typeMatches && topicMatches;
        item.hidden = !visible;
        if (visible) visibleItems += 1;
      });

      belt.hidden = visibleItems === 0;
      var heading = belt.previousElementSibling;
      if (heading && heading.tagName === 'H3') heading.hidden = visibleItems === 0;
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      button.closest('.filter-group').querySelectorAll('.filter-btn').forEach(function (sibling) {
        sibling.classList.remove('active');
      });
      button.classList.add('active');
      filterBooks();
    });
  });

  filterBooks();
}());

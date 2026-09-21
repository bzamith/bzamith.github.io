---
layout: page
title: Concepts
subtitle: Compact reference notes for study and review.
---

{% assign ds_page = site.pages | where: "path", "pages/concepts/ds_concepts.md" | first %}
{% assign ds_question_parts = ds_page.content | split: "### " %}
{% assign ds_heading_parts = ds_page.content | split: "## " %}
{% assign ds_questions = ds_question_parts.size | minus: 1 %}
{% assign ds_topics = ds_heading_parts.size | minus: 1 | minus: ds_questions | minus: 1 %}

{% assign se_page = site.pages | where: "path", "pages/concepts/se_concepts.md" | first %}
{% assign se_question_parts = se_page.content | split: "### " %}
{% assign se_heading_parts = se_page.content | split: "## " %}
{% assign se_questions = se_question_parts.size | minus: 1 %}
{% assign se_topics = se_heading_parts.size | minus: 1 | minus: se_questions | minus: 1 %}

<div class="concept-collections">
  <a class="concept-card" href="{{ '/pages/concepts/ds_concepts/' | prepend: site.baseurl }}">
    <span class="concept-card-index">01</span>
    <div class="concept-card-content">
      <h2>Data Science</h2>
      <p>Statistics, machine learning, causal inference, time series, generative AI, and recommender systems.</p>
      <div class="concept-card-tags" aria-label="Example topics">
        <span>statistics</span>
        <span>ML</span>
        <span>GenAI</span>
      </div>
    </div>
    <div class="concept-card-meta">
      <span>{{ ds_topics }} topics</span>
      <span>{{ ds_questions }} questions</span>
      <span class="concept-card-arrow" aria-hidden="true">→</span>
    </div>
  </a>

  <a class="concept-card" href="{{ '/pages/concepts/se_concepts/' | prepend: site.baseurl }}">
    <span class="concept-card-index">02</span>
    <div class="concept-card-content">
      <h2>Software Engineering</h2>
      <p>Data structures, architecture, development processes, coding practices, testing, Git, and Java.</p>
      <div class="concept-card-tags" aria-label="Example topics">
        <span>architecture</span>
        <span>testing</span>
        <span>code quality</span>
      </div>
    </div>
    <div class="concept-card-meta">
      <span>{{ se_topics }} topics</span>
      <span>{{ se_questions }} questions</span>
      <span class="concept-card-arrow" aria-hidden="true">→</span>
    </div>
  </a>
</div>

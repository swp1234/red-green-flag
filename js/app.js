/* Red Flag Green Flag Test - Main App */
(function() {
    'use strict';

    // Question data with scoring
    // Each option: [red, yellow, green] scores
    // Dimension mapping: [communication, boundaries, maturity, loyalty]
    const QUESTIONS = [
        { key: 'q1', dims: [1,1,0,0], options: [
            { scores: [0,0,3], dims: [3,3,2,0] },   // a: green
            { scores: [0,2,0], dims: [0,0,1,1] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [3,0,0], dims: [0,0,0,0] }    // d: red
        ]},
        { key: 'q2', dims: [1,0,1,1], options: [
            { scores: [0,0,3], dims: [3,2,2,2] },   // a: green
            { scores: [0,2,0], dims: [0,1,1,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [1,0,1,1] }    // d: yellow
        ]},
        { key: 'q3', dims: [1,1,1,0], options: [
            { scores: [0,0,3], dims: [3,2,3,1] },   // a: green
            { scores: [0,2,0], dims: [1,0,0,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [0,0,1,1] }    // d: yellow
        ]},
        { key: 'q4', dims: [1,0,1,0], options: [
            { scores: [0,0,3], dims: [3,1,3,1] },   // a: green
            { scores: [0,2,0], dims: [1,0,0,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [0,0,1,0] }    // d: yellow
        ]},
        { key: 'q5', dims: [1,1,1,0], options: [
            { scores: [0,0,3], dims: [2,2,3,1] },   // a: green
            { scores: [0,2,0], dims: [0,1,1,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [1,0,1,0] }    // d: yellow
        ]},
        { key: 'q6', dims: [1,1,0,1], options: [
            { scores: [0,0,3], dims: [3,2,2,2] },   // a: green
            { scores: [0,2,0], dims: [0,0,1,1] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [3,0,0], dims: [0,0,0,0] }    // d: red
        ]},
        { key: 'q7', dims: [1,1,1,0], options: [
            { scores: [0,0,3], dims: [3,3,2,0] },   // a: green
            { scores: [0,2,0], dims: [0,0,1,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [1,0,1,0] }    // d: yellow
        ]},
        { key: 'q8', dims: [0,1,1,0], options: [
            { scores: [0,0,3], dims: [1,3,3,0] },   // a: green
            { scores: [0,2,0], dims: [0,0,1,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,0,3], dims: [2,1,2,1] }    // d: green
        ]},
        { key: 'q9', dims: [1,0,1,0], options: [
            { scores: [0,0,3], dims: [3,1,3,1] },   // a: green
            { scores: [0,2,0], dims: [1,0,0,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [0,0,1,0] }    // d: yellow
        ]},
        { key: 'q10', dims: [1,1,0,1], options: [
            { scores: [0,0,3], dims: [3,2,1,2] },   // a: green
            { scores: [0,2,0], dims: [0,1,1,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [0,0,0,2] }    // d: yellow
        ]},
        { key: 'q11', dims: [1,1,1,0], options: [
            { scores: [0,0,3], dims: [3,2,3,0] },   // a: green
            { scores: [0,2,0], dims: [0,0,0,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [0,0,0,1] }    // d: yellow
        ]},
        { key: 'q12', dims: [1,1,0,1], options: [
            { scores: [0,0,3], dims: [3,3,1,2] },   // a: green
            { scores: [0,2,0], dims: [0,1,1,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [0,0,1,0] }    // d: yellow
        ]},
        { key: 'q13', dims: [1,1,1,0], options: [
            { scores: [0,0,3], dims: [2,2,3,0] },   // a: green
            { scores: [0,2,0], dims: [0,0,1,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [1,0,1,0] }    // d: yellow
        ]},
        { key: 'q14', dims: [1,1,1,0], options: [
            { scores: [0,0,3], dims: [2,3,3,0] },   // a: green
            { scores: [0,2,0], dims: [1,0,0,1] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [0,0,1,0] }    // d: yellow
        ]},
        { key: 'q15', dims: [1,0,1,1], options: [
            { scores: [0,0,3], dims: [2,1,3,3] },   // a: green
            { scores: [0,2,0], dims: [1,0,1,0] },   // b: yellow
            { scores: [3,0,0], dims: [0,0,0,0] },   // c: red
            { scores: [0,2,0], dims: [0,0,0,1] }    // d: yellow
        ]}
    ];

    const OPTION_KEYS = ['a', 'b', 'c', 'd'];

    let currentQuestion = 0;
    let answers = [];
    let appI18n = null;

    // DOM references
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // ===== i18n helpers =====
    function t(key) {
        if (appI18n) return appI18n.t(key);
        return key;
    }

    // ===== Screen management =====
    function showScreen(id) {
        $$('.screen').forEach(s => s.classList.remove('active'));
        $(`#screen-${id}`).classList.add('active');
    }

    // ===== Progress =====
    function updateProgress() {
        const pct = ((currentQuestion) / QUESTIONS.length) * 100;
        $('#progress-bar').style.width = pct + '%';
        const tmpl = t('question.progress');
        const text = tmpl.replace('{current}', currentQuestion + 1).replace('{total}', QUESTIONS.length);
        $('#progress-text').textContent = text;
    }

    // ===== Show question =====
    function showQuestion() {
        const q = QUESTIONS[currentQuestion];
        const qText = t(`questions.${q.key}.text`);
        $('#question-text').textContent = qText;

        const btns = $$('.btn-answer');
        OPTION_KEYS.forEach((k, i) => {
            btns[i].textContent = t(`questions.${q.key}.${k}`);
            btns[i].className = 'btn-answer';
            btns[i].disabled = false;
        });

        updateProgress();
    }

    // ===== Select answer =====
    function selectAnswer(index) {
        const q = QUESTIONS[currentQuestion];
        const opt = q.options[index];

        // Visual feedback
        const btns = $$('.btn-answer');
        btns.forEach(b => { b.disabled = true; });

        // Determine dominant color for feedback
        const maxScore = Math.max(...opt.scores);
        const colorIdx = opt.scores.indexOf(maxScore);
        const colorClass = ['selected-red', 'selected-yellow', 'selected-green'][colorIdx];
        btns[index].classList.add(colorClass);

        answers.push({ questionIndex: currentQuestion, optionIndex: index });

        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < QUESTIONS.length) {
                showQuestion();
            } else {
                calculateResult();
            }
        }, 400);
    }

    // ===== Calculate result =====
    function calculateResult() {
        let totalRed = 0, totalYellow = 0, totalGreen = 0;
        let dims = [0, 0, 0, 0]; // communication, boundaries, maturity, loyalty
        let maxDims = [0, 0, 0, 0];

        answers.forEach(ans => {
            const q = QUESTIONS[ans.questionIndex];
            const opt = q.options[ans.optionIndex];
            totalRed += opt.scores[0];
            totalYellow += opt.scores[1];
            totalGreen += opt.scores[2];

            for (let i = 0; i < 4; i++) {
                dims[i] += opt.dims[i];
                maxDims[i] += 3; // max possible per question per dimension
            }
        });

        const total = totalRed + totalYellow + totalGreen;
        const redPct = Math.round((totalRed / total) * 100);
        const yellowPct = Math.round((totalYellow / total) * 100);
        const greenPct = 100 - redPct - yellowPct;

        // Normalize dimensions to 0-100
        const dimValues = dims.map((d, i) => Math.min(100, Math.round((d / maxDims[i]) * 100)));

        // Determine archetype
        const archetype = getArchetype(redPct, yellowPct, greenPct);

        showResult(redPct, yellowPct, greenPct, dimValues, archetype);
    }

    function getArchetype(red, yellow, green) {
        if (green >= 60) return 'greenHigh';
        if (green >= 45) return 'greenMed';
        if (yellow >= 45) return 'yellowHigh';
        if (yellow >= 35) return 'yellowMed';
        if (red >= 45) return 'redHigh';
        if (red >= 30) return 'redMed';
        if (Math.abs(red - green) <= 10 && Math.abs(red - yellow) <= 10) return 'balanced';
        return 'mixed';
    }

    // ===== Show result =====
    function showResult(red, yellow, green, dims, archetypeKey) {
        showScreen('result');

        // Archetype
        const emojis = {
            greenHigh: '🟢', greenMed: '🌿', yellowHigh: '🟡', yellowMed: '💎',
            redHigh: '🔴', redMed: '🌪️', mixed: '🎭', balanced: '🌈'
        };
        $('#archetype-emoji').textContent = emojis[archetypeKey] || '🚩';
        $('#archetype-title').textContent = t(`archetypes.${archetypeKey}.title`);
        $('#archetype-desc').textContent = t(`archetypes.${archetypeKey}.desc`);

        // Update archetype title gradient color based on dominant flag
        const titleEl = $('#archetype-title');
        if (archetypeKey.startsWith('red')) {
            titleEl.style.background = 'linear-gradient(135deg, #f87171, #ef4444)';
        } else if (archetypeKey.startsWith('yellow')) {
            titleEl.style.background = 'linear-gradient(135deg, #facc15, #eab308)';
        } else {
            titleEl.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
        }
        titleEl.style.webkitBackgroundClip = 'text';
        titleEl.style.webkitTextFillColor = 'transparent';
        titleEl.style.backgroundClip = 'text';

        // Flag ratio bar (animate)
        setTimeout(() => {
            $('#flag-red').style.width = red + '%';
            $('#flag-yellow').style.width = yellow + '%';
            $('#flag-green').style.width = green + '%';
        }, 100);
        $('#label-red').textContent = '🔴 ' + red + '%';
        $('#label-yellow').textContent = '🟡 ' + yellow + '%';
        $('#label-green').textContent = '🟢 ' + green + '%';

        // Dimensions
        const dimIds = ['communication', 'boundaries', 'maturity', 'loyalty'];
        dimIds.forEach((id, i) => {
            const el = $(`#dim-${id}`);
            if (el) {
                const fill = el.querySelector('.dim-bar-fill');
                const val = el.querySelector('.dim-value');
                setTimeout(() => {
                    fill.style.width = dims[i] + '%';
                }, 200 + i * 100);
                val.textContent = dims[i];
            }
        });

        // GA4 event
        if (typeof gtag === 'function') {
            gtag('event', 'quiz_complete', {
                event_category: 'red_green_flag',
                event_label: archetypeKey,
                green_pct: green,
                red_pct: red
            });
        }

        // Store for sharing
        window._flagResult = { red, yellow, green, archetypeKey };
    }

    // ===== Share =====
    function shareTwitter() {
        const r = window._flagResult;
        if (!r) return;
        const archTitle = t(`archetypes.${r.archetypeKey}.title`);
        let text = t('share.text');
        text = text.replace('{green}', r.green).replace('{archetype}', archTitle);
        const url = 'https://dopabrain.com/red-green-flag/';
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank', 'noopener');
    }

    function copyLink() {
        const url = 'https://dopabrain.com/red-green-flag/';
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(() => {
                const btn = $('#btn-copy');
                const original = btn.textContent;
                btn.textContent = t('share.copied');
                setTimeout(() => { btn.textContent = original; }, 2000);
            });
        } else {
            // Fallback
            const ta = document.createElement('textarea');
            ta.value = url;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            const btn = $('#btn-copy');
            const original = btn.textContent;
            btn.textContent = t('share.copied');
            setTimeout(() => { btn.textContent = original; }, 2000);
        }
    }

    // ===== Theme =====
    function initTheme() {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = saved || (prefersDark ? 'dark' : 'dark'); // dark mode first
        document.documentElement.setAttribute('data-theme', theme);
        updateThemeIcon(theme);
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    }

    function updateThemeIcon(theme) {
        const icon = $('.theme-icon');
        if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    // ===== Language =====
    function initLanguageSelector() {
        const select = $('#lang-select');
        if (!select || !appI18n) return;
        select.value = appI18n.getCurrentLanguage();
        select.addEventListener('change', async (e) => {
            await appI18n.setLanguage(e.target.value);
            // Re-render current screen content if on question screen
            if (currentQuestion < QUESTIONS.length && document.querySelector('#screen-question.active')) {
                showQuestion();
            }
        });
    }

    // ===== Init =====
    async function init() {
        try {
            // i18n init
            appI18n = i18n;
            await appI18n.loadTranslations(appI18n.getCurrentLanguage());
            appI18n.updateUI();
        } catch (e) {
            console.warn('i18n load failed, using defaults:', e);
        }

        initTheme();
        initLanguageSelector();

        // Event listeners
        $('#btn-start').addEventListener('click', () => {
            currentQuestion = 0;
            answers = [];
            showScreen('question');
            showQuestion();
        });

        $$('.btn-answer').forEach((btn, i) => {
            btn.addEventListener('click', () => selectAnswer(i));
        });

        $('#btn-retake').addEventListener('click', () => {
            currentQuestion = 0;
            answers = [];
            showScreen('start');
        });

        $('#btn-twitter').addEventListener('click', shareTwitter);
        $('#btn-copy').addEventListener('click', copyLink);
        $('#theme-toggle').addEventListener('click', toggleTheme);

        // Hide loader
        const loader = $('#app-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        }
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

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

        // GA4 event (clean category telemetry, no raw percentage/score leakage)
        if (typeof gtag === 'function') {
            gtag('event', 'quiz_complete', {
                event_category: 'red_green_flag',
                event_label: archetypeKey
            });
            gtag('event', 'test_complete', {
                app_name: 'red-green-flag',
                result_type: archetypeKey
            });
        }

        // Store for sharing & language re-render
        window._flagResult = { red, yellow, green, dims, archetypeKey };
        const lang = appI18n ? appI18n.getCurrentLanguage() : 'ko';
        updateCuratedResources(lang);
    }

    // ===== Share & Story Card =====
    function getShareUrl() {
        const lang = appI18n ? appI18n.getCurrentLanguage() : 'ko';
        const url = new URL('https://dopabrain.com/red-green-flag/');
        url.searchParams.set('lang', lang);
        url.searchParams.set('utm_source', 'share');
        return url.toString();
    }

    function shareTwitter() {
        const r = window._flagResult;
        if (!r) return;
        const archTitle = t(`archetypes.${r.archetypeKey}.title`);
        let text = t('share.text');
        text = text.replace('{green}', r.green).replace('{archetype}', archTitle);
        const url = getShareUrl();
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        if (typeof gtag === 'function') {
            gtag('event', 'share', {
                app_name: 'red-green-flag',
                share_channel: 'twitter',
                result_type: r.archetypeKey
            });
        }
        window.open(twitterUrl, '_blank', 'noopener');
    }

    function copyLink() {
        const url = getShareUrl();
        const done = () => {
            const btn = $('#btn-copy');
            const original = btn.textContent;
            btn.textContent = t('share.copied');
            setTimeout(() => { btn.textContent = original; }, 2000);
        };
        if (typeof gtag === 'function') {
            gtag('event', 'share', {
                app_name: 'red-green-flag',
                share_channel: 'copy_link',
                result_type: window._flagResult ? window._flagResult.archetypeKey : 'unknown'
            });
        }
        const execCopy = () => {
            try {
                const ta = document.createElement('textarea');
                ta.value = url;
                ta.setAttribute('readonly', '');
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                const ok = document.execCommand('copy');
                document.body.removeChild(ta);
                if (ok) done();
            } catch (e) {}
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(done).catch(execCopy);
        } else {
            execCopy();
        }
    }

    function downloadStoryCard() {
        const r = window._flagResult;
        if (!r) return;
        const emojis = {
            greenHigh: '🟢', greenMed: '🌿', yellowHigh: '🟡', yellowMed: '💎',
            redHigh: '🔴', redMed: '🌪️', mixed: '🎭', balanced: '🌈'
        };
        const title = t(`archetypes.${r.archetypeKey}.title`);
        const desc = t(`archetypes.${r.archetypeKey}.desc`);
        const canvas = document.createElement('canvas');
        canvas.width = 1080;
        canvas.height = 1920;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createLinearGradient(0, 0, 1080, 1920);
        grad.addColorStop(0, '#071318');
        grad.addColorStop(0.55, '#0f2027');
        grad.addColorStop(1, '#111827');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1080, 1920);

        ctx.fillStyle = 'rgba(34, 197, 94, 0.16)';
        ctx.beginPath();
        ctx.arc(540, 520, 320, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#4ade80';
        ctx.font = 'bold 34px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('DOPABRAIN · RED & GREEN FLAG REPORT', 540, 210);

        ctx.font = '150px sans-serif';
        ctx.fillText(emojis[r.archetypeKey] || '🚩', 540, 560);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 58px sans-serif';
        ctx.fillText(title, 540, 740);

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '32px sans-serif';
        const words = desc.split(' ');
        let line = '';
        let y = 840;
        words.forEach((word) => {
            const test = line ? `${line} ${word}` : word;
            if (ctx.measureText(test).width > 860) {
                ctx.fillText(line, 540, y);
                line = word;
                y += 48;
            } else {
                line = test;
            }
        });
        if (line) ctx.fillText(line, 540, y);

        ctx.fillStyle = '#4ade80';
        ctx.font = 'bold 42px sans-serif';
        ctx.fillText(`🟢 ${r.green}%   🟡 ${r.yellow}%   🔴 ${r.red}%`, 540, 1260);

        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 30px sans-serif';
        ctx.fillText('dopabrain.com/red-green-flag/', 540, 1760);

        try {
            const link = document.createElement('a');
            link.download = `flag-report-${r.archetypeKey}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (e) {}

        if (typeof gtag === 'function') {
            gtag('event', 'save_image', {
                app_name: 'red-green-flag',
                result_type: r.archetypeKey,
                save_surface: 'result_story_1080x1920'
            });
        }
    }

    function updateCuratedResources(lang) {
        const container = $('#curated-resources-card');
        if (!container) return;
        const stores = {
            de: 'www.amazon.de',
            fr: 'www.amazon.fr',
            es: 'www.amazon.es',
            ja: 'www.amazon.co.jp',
            ko: 'www.amazon.com'
        };
        const host = stores[lang] || 'www.amazon.com';
        const urls = {
            sevenPrinciples: `https://${host}/dp/0553447718?tag=dopabrain-20`,
            boundaries: `https://${host}/dp/0310351804?tag=dopabrain-20`
        };
        container.querySelectorAll('.curated-item').forEach((link) => {
            const key = link.getAttribute('data-curated-key');
            if (urls[key]) link.setAttribute('href', urls[key]);
            if (!link.dataset.trackedCurated) {
                link.dataset.trackedCurated = 'true';
                link.addEventListener('click', () => {
                    const currentLang = appI18n ? appI18n.getCurrentLanguage() : lang;
                    const dest = link.getAttribute('href');
                    if (typeof gtag === 'function') {
                        gtag('event', 'curated_resource_click', {
                            app_name: 'red-green-flag',
                            resource_key: key,
                            content_locale: currentLang,
                            cta_surface: 'curated_resources'
                        });
                        gtag('event', 'content_cta_click', {
                            cta_type: 'curated_book',
                            destination: dest,
                            source: 'red_green_flag'
                        });
                    }
                });
            }
        });
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
            initRelatedFunnels();
            updateCuratedResources(e.target.value);
            if (currentQuestion < QUESTIONS.length && document.querySelector('#screen-question.active')) {
                showQuestion();
            } else if (window._flagResult && document.querySelector('#screen-result.active')) {
                const r = window._flagResult;
                $('#archetype-title').textContent = t(`archetypes.${r.archetypeKey}.title`);
                $('#archetype-desc').textContent = t(`archetypes.${r.archetypeKey}.desc`);
            }
        });
    }

    // ===== Funnel Bridge =====
    function initRelatedFunnels() {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang') || (appI18n ? appI18n.getCurrentLanguage() : 'ko') || 'ko';
        const base = (window.location.origin && window.location.origin !== 'null') ? window.location.origin : 'https://dopabrain.com';
        document.querySelectorAll('.related-grid a').forEach(link => {
            const baseHref = link.getAttribute('data-base-href') || link.getAttribute('href');
            if (!baseHref || baseHref.startsWith('http') || baseHref.startsWith('#')) return;
            try {
                const url = new URL(baseHref, base);
                url.searchParams.set('lang', lang);
                if (!url.searchParams.has('source')) url.searchParams.set('source', 'red_green_flag_result');
                link.setAttribute('href', url.pathname + url.search);
            } catch(e) {}
            if (!link.dataset.trackedCta) {
                link.dataset.trackedCta = 'true';
                link.addEventListener('click', () => {
                    if (typeof gtag === 'function') {
                        gtag('event', 'content_cta_click', {
                            cta_surface: 'red_green_flag_related',
                            destination: link.getAttribute('href'),
                            source: 'red_green_flag',
                            lang: lang
                        });
                    }
                });
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
        initRelatedFunnels();
        updateCuratedResources(appI18n ? appI18n.getCurrentLanguage() : 'ko');

        // Event listeners
        $('#btn-start').addEventListener('click', () => {
            currentQuestion = 0;
            answers = [];
            if (typeof gtag === 'function') {
                gtag('event', 'test_start', {
                    app_name: 'red-green-flag',
                    content_type: 'relational_flag_quiz'
                });
            }
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

        const downloadBtn = $('#btn-download');
        if (downloadBtn) downloadBtn.addEventListener('click', downloadStoryCard);
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

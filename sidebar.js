/**
 * Sidebar Navigation and Settings Management
 * Gerencia a navegação da sidebar e as funcionalidades das abas de configuração
 */

document.addEventListener('DOMContentLoaded', function () {
    // ========================================
    // GERENCIAMENTO DA SIDEBAR
    // ========================================
    
    const navItems = document.querySelectorAll('.settings-sidebar .nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetTab = this.dataset.target;

            // Remove classe active de todos os items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Remove classe active de todos os tabs
            tabContents.forEach(tab => tab.classList.remove('active'));

            // Adiciona classe active ao item clicado
            this.classList.add('active');

            // Adiciona classe active ao tab correspondente
            const activeTab = document.getElementById(targetTab);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        });
    });

    // ========================================
    // GERENCIAMENTO DE SLIDERS (ALERTAS)
    // ========================================

    const speedSlider = document.getElementById('speed-limit');
    const ignitionSlider = document.getElementById('ignition-time');
    const batterySlider = document.getElementById('battery-alert');

    if (speedSlider) {
        speedSlider.addEventListener('input', function () {
            document.getElementById('speed-value').textContent = this.value + ' km/h';
            updateSliderBackground(this);
        });
        updateSliderBackground(speedSlider);
    }

    if (ignitionSlider) {
        ignitionSlider.addEventListener('input', function () {
            const minutes = this.value;
            const hours = Math.floor(minutes / 60);
            let displayValue = '';
            
            if (hours > 0) {
                displayValue = `${hours}h ${minutes % 60}min`;
            } else {
                displayValue = `${minutes} minutos`;
            }
            
            document.getElementById('ignition-value').textContent = displayValue;
            updateSliderBackground(this);
        });
        updateSliderBackground(ignitionSlider);
    }

    if (batterySlider) {
        batterySlider.addEventListener('input', function () {
            document.getElementById('battery-value').textContent = this.value + '%';
            updateSliderBackground(this);
        });
        updateSliderBackground(batterySlider);
    }

    /**
     * Atualiza o visual do slider baseado no valor
     */
    function updateSliderBackground(slider) {
        const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(
            to right,
            var(--color-primary) 0%,
            var(--color-primary) ${value}%,
            var(--border-color) ${value}%,
            var(--border-color) 100%
        )`;
    }

    // ========================================
    // GERENCIAMENTO DE TEMA (LIGHT/DARK)
    // ========================================

    const themeToggle = document.getElementById('theme-toggle');
    const themeBtns = document.querySelectorAll('.theme-btn');

    if (themeToggle) {
        themeToggle.addEventListener('change', function () {
            const isDark = this.checked;
            applyTheme(isDark ? 'dark' : 'light');
        });
    }

    themeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const theme = this.dataset.theme;
            
            // Remove classe active de todos os botões
            themeBtns.forEach(b => b.classList.remove('active'));
            
            // Adiciona classe active ao botão clicado
            this.classList.add('active');

            // Atualiza o toggle switch
            if (themeToggle) {
                themeToggle.checked = theme === 'dark';
            }

            // Aplica o tema
            applyTheme(theme);
        });
    });

    /**
     * Aplica o tema (light/dark) ao sistema
     */
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.style.colorScheme = 'dark';
            localStorage.setItem('theme', 'dark');
            console.log('Tema escuro aplicado');
        } else {
            document.documentElement.style.colorScheme = 'light';
            localStorage.setItem('theme', 'light');
            console.log('Tema claro aplicado');
        }
    }

    // Carrega tema salvo ao iniciar a página
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    if (themeToggle) {
        themeToggle.checked = savedTheme === 'dark';
    }
    themeBtns.forEach(btn => {
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
    });

    // ========================================
    // GERENCIAMENTO DE DISPOSITIVOS
    // ========================================

    const addDeviceBtn = document.querySelector('.btn-primary');
    if (addDeviceBtn) {
        addDeviceBtn.addEventListener('click', function () {
            console.log('Botão "Adicionar Novo Dispositivo" clicado');
            // Aqui pode adicionar lógica para abrir um modal de adição de novo dispositivo
            alert('Funcionalidade de adicionar dispositivo em desenvolvimento');
        });
    }

    // Gerenciamento de botões de ação dos dispositivos
    const deviceActionBtns = document.querySelectorAll('.btn-action');
    deviceActionBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const actionType = this.textContent.trim();
            console.log(`Ação do dispositivo: ${actionType}`);
            // Aqui pode adicionar lógica para abrir modais de edição
        });
    });

    // ========================================
    // GERENCIAMENTO DE USUÁRIOS
    // ========================================

    const permissionSelects = document.querySelectorAll('.permission-select');
    permissionSelects.forEach(select => {
        select.addEventListener('change', function () {
            const userName = this.closest('tr').querySelector('td').textContent;
            const newPermission = this.value;
            console.log(`Permissão do usuário ${userName} alterada para: ${newPermission}`);
        });
    });

    // Botões de ação na tabela de usuários
    const deleteUserBtns = document.querySelectorAll('.btn-icon.btn-danger');
    deleteUserBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (confirm('Tem certeza que deseja remover este usuário?')) {
                console.log('Usuário removido');
            }
        });
    });

    // Botão adicionar novo usuário
    const addUserBtn = Array.from(document.querySelectorAll('.btn-secondary')).find(
        btn => btn.textContent.includes('Adicionar Novo Usuário')
    );
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function () {
            console.log('Botão "Adicionar Novo Usuário" clicado');
            alert('Funcionalidade de adicionar usuário em desenvolvimento');
        });
    }

    // ========================================
    // GERENCIAMENTO DE AUTENTICAÇÃO
    // ========================================

    const passwordForms = document.querySelectorAll('.password-form');
    passwordForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('.form-input');
            
            if (inputs[1].value === inputs[2].value) {
                console.log('Senha atualizada com sucesso');
                alert('Senha atualizada com sucesso!');
                this.reset();
            } else {
                alert('As senhas não correspondem!');
            }
        });
    });

    // Botão ativar 2FA
    const enable2FABtn = Array.from(document.querySelectorAll('.btn-secondary')).find(
        btn => btn.textContent.includes('Ativar')
    );
    if (enable2FABtn) {
        enable2FABtn.addEventListener('click', function () {
            console.log('2FA sendo ativado...');
            alert('Funcionalidade de 2FA em desenvolvimento');
        });
    }

    // ========================================
    // LOG DAS CONFIGURAÇÕES
    // ========================================

    console.log('✓ Sistema de configurações carregado com sucesso');
    console.log('✓ Navegação da sidebar ativada');
    console.log('✓ Sliders de alertas configurados');
    console.log('✓ Toggle de tema configurado');
    console.log('✓ Gerenciamento de dispositivos ativado');
    console.log('✓ Gerenciamento de usuários ativado');
});

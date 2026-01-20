tailwind.config = {
    theme: {
        extend: {
            colors: {
                background: '#0a0a0f',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}

// Глобальные настройки цен
const pricingConfig = {
    discountPercentage: 20, // Скидка 20% при годовой оплате
    isMonthly: true
};

// Данные серверов
const servers = [
    
    {
        id: 1,
        name: 'Сервер Аст-1',
        location: 'Астана, Казахстан',
        cpu: 'AMD Ryzen 5 3600',
        cpuCores: 6,
        ram: '16GB',
        ramType: 'DDR4',
        nvme: '0TB',
        ssd: '1TB',
        hdd: '1TB',
        cpuUsage: 75,
        ramUsage: 75,
        diskUsage: 45,
        parts: [
            { id: 1, name: 'Node 1', occupied: true },
            { id: 2, name: 'Node 2', occupied: true },
            { id: 3, name: 'Node 3', occupied: true },
            { id: 4, name: 'Node 4', occupied: true },
            { id: 5, name: 'Node 5', occupied: true },
            { id: 6, name: 'Node 6', occupied: true },
            { id: 7, name: 'Node 7', occupied: true },
            { id: 8, name: 'Node 8', occupied: true },
            { id: 9, name: 'Node 9', occupied: true },
            { id: 10, name: 'Node 10', occupied: true },
            { id: 11, name: 'Node 11', occupied: true },
            { id: 12, name: 'Node 12', occupied: true },
        ]
    },
    {
        id: 2,
        name: 'Сервер Алм-2',
        location: 'Алмата, Казахстан',
        cpu: 'AMD Ryzen 9 5900X',
        cpuCores: 6,
        ram: '32GB',
        ramType: 'DDR5',
        nvme: '0TB',
        ssd: '1TB',
        hdd: '1TB',
        cpuUsage: 0,
        ramUsage: 0,
        diskUsage: 0,
        parts: [
            { id: 1, name: 'Node 1', occupied: false },
            { id: 2, name: 'Node 2', occupied: false },
            { id: 3, name: 'Node 3', occupied: false },
            { id: 4, name: 'Node 4', occupied: true },
            { id: 5, name: 'Node 5', occupied: false },
            { id: 6, name: 'Node 6', occupied: true },
            { id: 7, name: 'Node 7', occupied: true },
            { id: 8, name: 'Node 8', occupied: false },
            { id: 9, name: 'Node 9', occupied: true },
            { id: 10, name: 'Node 10', occupied: false },
            { id: 11, name: 'Node 11', occupied: false },
            { id: 12, name: 'Node 12', occupied: false },
        ]
    },
];

// Данные тарифных планов
const tariffs = [
    {
        name: 'KVM-Start',
        desc: 'Для личных проектов',
        price: 1400,
        cpu: '1 Core',
        ram: '1 GB',
        storage: '10 GB',
        isHit: false,
        forSale: true
    },
    {
        name: 'KVM-Start-Plus',
        desc: 'Больше памяти',
        price: 3200,
        cpu: '1 Core',
        ram: '2 GB',
        storage: '45 GB',
        isHit: false,
        forSale: true
    },
    {
        name: 'KVM-Standard',
        desc: 'Оптимальный выбор',
        price: 4900,
        cpu: '2 Cores',
        ram: '2 GB',
        storage: '60 GB',
        isHit: true,
        forSale: true
    },
    {
        name: 'Standard-Pro',
        desc: 'Для бизнеса',
        price: 7800,
        cpu: '2 Cores',
        ram: '4 GB',
        storage: '100 GB',
        isHit: false,
        forSale: true
    },
    {
        name: 'KVM-Power',
        desc: 'Высокая нагрузка',
        price: 13200,
        cpu: '4 Cores',
        ram: '8 GB',
        storage: '120 GB',
        isHit: false,
        forSale: false
    },
    {
        name: 'KVM-Elite',
        desc: 'Максимальная мощь',
        price: 27000,
        cpu: '8 Cores',
        ram: '16 GB',
        storage: '250 GB',
        isHit: false,
        forSale: false
    }
];

// Функция рендера карточек
function renderTariffs() {
    const container = document.getElementById('pricing-container');
    if (!container) return;

    container.innerHTML = tariffs.map(tariff => {
        // Расчет цены со скидкой, если выбрана годовая оплата
        const finalPrice = pricingConfig.isMonthly 
            ? tariff.price 
            : Math.round(tariff.price * (1 - pricingConfig.discountPercentage / 100));
        
        return `
            <div class="min-w-[85%] md:min-w-[350px] flex-shrink-0 snap-center relative p-8 rounded-3xl transition-all flex flex-col 
                ${tariff.isHit ? 'bg-gradient-to-b from-[#1a1625] to-[#0a0a0f] border border-rose-500/30 shadow-[0_0_50px_rgba(225,29,72,0.15)]' : 'bg-white/5 border border-white/5 hover:border-white/10'}">
                
                ${tariff.isHit ? '<div class="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase">ХИТ</div>' : ''}
                
                <div class="mb-4">
                    <h3 class="text-xl font-bold ${tariff.isHit ? 'text-rose-300' : 'text-gray-100'}">${tariff.name}</h3>
                    <p class="text-sm text-gray-400 mt-1">${tariff.desc}</p>
                </div>
                
                <div class="mb-6 pb-6 border-b ${tariff.isHit ? 'border-white/10' : 'border-white/5'}">
                    <span class="text-4xl font-bold text-white">${finalPrice}₸</span>
                    <span class="text-gray-500 text-sm">/мес</span>
                </div>
                
                <div class="space-y-4 mb-8 flex-grow">
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-gray-400 flex items-center gap-2"><i data-lucide="cpu" class="w-4 h-4 text-rose-500"></i> vCPU</span>
                        <span class="text-white font-medium">${tariff.cpu}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-gray-400 flex items-center gap-2"><i data-lucide="memory-stick" class="w-4 h-4 text-rose-500"></i> RAM</span>
                        <span class="text-white font-medium">${tariff.ram}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-gray-400 flex items-center gap-2"><i data-lucide="hard-drive" class="w-4 h-4 text-rose-500"></i> NVMe</span>
                        <span class="text-white font-medium">${tariff.storage}</span>
                    </div>
                </div>
                
                <button class="w-full py-3 rounded-xl transition-all 
                    ${tariff.isHit ? 'bg-gradient-to-r from-rose-500 to-purple-600 hover:to-purple-500 text-white font-bold' : 'bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10'}">
                    Заказать
                </button>
            </div>
        `;
    }).join('');
    
    lucide.createIcons();
}

// Виртуальный скролл - удаляем пролистанные элементы и создаём новые впереди
function setupPricingCarousel() {
    const container = document.getElementById('pricing-container');
    if (!container) return;

    let currentIndex = 0;
    const cardWidth = 350;
    const gap = 24;
    const totalItemWidth = cardWidth + gap;
    const itemCount = tariffs.length;
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    // Скрываем стрелки, если тарифов не более 3
    if (itemCount <= 3) {
        if (scrollLeftBtn) scrollLeftBtn.style.display = 'none';
        if (scrollRightBtn) scrollRightBtn.style.display = 'none';
    }

    // Рендерим начальные карточки
    function renderCards(startIndex, direction = 'right') {
        const existingCards = container.querySelectorAll('[data-tariff]');
        const cardsToShow = Math.min(3, itemCount);
        
        // Добавляем класс выхода для анимации
        if (existingCards.length > 0 && itemCount > 3) {
            existingCards.forEach(card => {
                card.classList.add('exit');
            });
            
            // Ждём окончания анимации выхода
            setTimeout(() => {
                container.innerHTML = '';
                createNewCards(startIndex);
            }, 250);
        } else {
            container.innerHTML = '';
            createNewCards(startIndex);
        }
        
        function createNewCards(startIdx) {
            for (let i = 0; i < cardsToShow; i++) {
                const index = (startIdx + i) % itemCount;
                const tariff = tariffs[index];
                
                const finalPrice = pricingConfig.isMonthly 
                    ? tariff.price 
                    : Math.round(tariff.price * (1 - pricingConfig.discountPercentage / 100));
                
                const card = document.createElement('div');
                card.setAttribute('data-tariff', 'true');
                card.className = `min-w-[350px] flex-shrink-0 relative p-8 rounded-3xl transition-all flex flex-col 
                    ${tariff.isHit ? 'bg-gradient-to-b from-[#1a1625] to-[#0a0a0f] border border-rose-500/30 shadow-[0_0_50px_rgba(225,29,72,0.15)]' : 'bg-white/5 border border-white/5 hover:border-white/10'}`;
                
                card.innerHTML = `
                    ${tariff.isHit ? '<div class="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase">ХИТ</div>' : ''}
                    
                    <div class="mb-4">
                        <h3 class="text-xl font-bold ${tariff.isHit ? 'text-rose-300' : 'text-gray-100'}">${tariff.name}</h3>
                        <p class="text-sm text-gray-400 mt-1">${tariff.desc}</p>
                    </div>
                    
                    <div class="mb-6 pb-6 border-b ${tariff.isHit ? 'border-white/10' : 'border-white/5'}">
                        <span class="text-4xl font-bold text-white">${finalPrice}₸</span>
                        <span class="text-gray-500 text-sm">/мес</span>
                    </div>
                    
                    <div class="space-y-4 mb-8 flex-grow">
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-gray-400 flex items-center gap-2"><i data-lucide="cpu" class="w-4 h-4 text-rose-500"></i> vCPU</span>
                            <span class="text-white font-medium">${tariff.cpu}</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-gray-400 flex items-center gap-2"><i data-lucide="memory-stick" class="w-4 h-4 text-rose-500"></i> RAM</span>
                            <span class="text-white font-medium">${tariff.ram}</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-gray-400 flex items-center gap-2"><i data-lucide="hard-drive" class="w-4 h-4 text-rose-500"></i> NVMe</span>
                            <span class="text-white font-medium">${tariff.storage}</span>
                        </div>
                    </div>
                    
                    <button class="w-full py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed
                        ${tariff.forSale ? (tariff.isHit ? 'bg-gradient-to-r from-rose-500 to-purple-600 hover:to-purple-500 text-white font-bold' : 'bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10') : 'bg-gray-600 text-white font-medium cursor-not-allowed'}" 
                        ${!tariff.forSale ? 'disabled' : ''}>
                        ${tariff.forSale ? 'Заказать' : 'Закончилось'}
                    </button>
                `;
                
                container.appendChild(card);
            }
            
            lucide.createIcons();
        }
    }

    renderCards(0);

    // Обработка скролла
    if (scrollLeftBtn && itemCount > 3) {
        scrollLeftBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + itemCount) % itemCount;
            renderCards(currentIndex, 'left');
        });
    }

    if (scrollRightBtn && itemCount > 3) {
        scrollRightBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % itemCount;
            renderCards(currentIndex, 'right');
        });
    }
}

// Функция рендера карточек
function renderTariffs() {
    const container = document.getElementById('pricing-container');
    if (!container) return;

    container.innerHTML = tariffs.map(tariff => {
        // Расчет цены со скидкой, если выбрана годовая оплата
        const finalPrice = pricingConfig.isMonthly 
            ? tariff.price 
            : Math.round(tariff.price * (1 - pricingConfig.discountPercentage / 100));
        
        return `
            <div data-tariff="true" class="min-w-[350px] flex-shrink-0 relative p-8 rounded-3xl transition-all flex flex-col 
                ${tariff.isHit ? 'bg-gradient-to-b from-[#1a1625] to-[#0a0a0f] border border-rose-500/30 shadow-[0_0_50px_rgba(225,29,72,0.15)]' : 'bg-white/5 border border-white/5 hover:border-white/10'}">
                
                ${tariff.isHit ? '<div class="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase">ХИТ</div>' : ''}
                
                <div class="mb-4">
                    <h3 class="text-xl font-bold ${tariff.isHit ? 'text-rose-300' : 'text-gray-100'}">${tariff.name}</h3>
                    <p class="text-sm text-gray-400 mt-1">${tariff.desc}</p>
                </div>
                
                <div class="mb-6 pb-6 border-b ${tariff.isHit ? 'border-white/10' : 'border-white/5'}">
                    <span class="text-4xl font-bold text-white">${finalPrice}₸</span>
                    <span class="text-gray-500 text-sm">/мес</span>
                </div>
                
                <div class="space-y-4 mb-8 flex-grow">
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-gray-400 flex items-center gap-2"><i data-lucide="cpu" class="w-4 h-4 text-rose-500"></i> vCPU</span>
                        <span class="text-white font-medium">${tariff.cpu}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-gray-400 flex items-center gap-2"><i data-lucide="memory-stick" class="w-4 h-4 text-rose-500"></i> RAM</span>
                        <span class="text-white font-medium">${tariff.ram}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-gray-400 flex items-center gap-2"><i data-lucide="hard-drive" class="w-4 h-4 text-rose-500"></i> NVMe</span>
                        <span class="text-white font-medium">${tariff.storage}</span>
                    </div>
                </div>
                
                <button class="w-full py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed
                    ${tariff.forSale ? (tariff.isHit ? 'bg-gradient-to-r from-rose-500 to-purple-600 hover:to-purple-500 text-white font-bold' : 'bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10') : 'bg-gray-600 text-white font-medium cursor-not-allowed'}" 
                    ${!tariff.forSale ? 'disabled' : ''}>
                    ${tariff.forSale ? 'Заказать' : 'Закончилось'}
                </button>
            </div>
        `;
    }).join('');
    
    lucide.createIcons();
    setupPricingCarousel();
}

// Управление интерфейсом
document.addEventListener('DOMContentLoaded', () => {
    const discountBadge = document.getElementById('discount-badge');
    if (discountBadge) discountBadge.innerText = `-${pricingConfig.discountPercentage}%`;

    renderTariffs();

    const billingToggle = document.getElementById('billing-toggle');
    const toggleCircle = document.getElementById('toggle-circle');
    
    if (billingToggle) {
        billingToggle.onclick = () => {
            pricingConfig.isMonthly = !pricingConfig.isMonthly;
            toggleCircle.classList.toggle('translate-x-6');
            document.getElementById('monthly-label').classList.toggle('text-white');
            document.getElementById('monthly-label').classList.toggle('text-gray-500');
            document.getElementById('yearly-label').classList.toggle('text-white');
            document.getElementById('yearly-label').classList.toggle('text-gray-500');
            renderTariffs();
        };
    }

    // Рендер секции серверов
    renderServersSection();
});

// Рендер серверов
function renderServersSection() {
    const serversGrid = document.getElementById('servers-grid');
    if (!serversGrid) return;

    serversGrid.innerHTML = servers.map(server => {
        const occupied = server.parts.filter(p => p.occupied).length;
        const total = server.parts.length;
        const occupiedPercent = Math.round((occupied / total) * 100);

        return `
            <div class="server-card bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl cursor-pointer transition-all hover:border-rose-500/50" data-server-id="${server.id}">
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <h3 class="text-2xl font-bold text-white">${server.name}</h3>
                        <p class="text-gray-400 text-sm mt-1">${server.location}</p>
                    </div>
                    <div class="text-right">
                        <div class="text-3xl font-bold text-rose-400">${occupiedPercent}%</div>
                        <div class="text-sm text-gray-400">занято</div>
                    </div>
                </div>

                <div class="grid grid-cols-6 gap-2 mb-4">
                    ${server.parts.map(part => `
                        <div class="server-part h-16 rounded-lg transition-all ${part.occupied ? 'bg-red-500/80 hover:bg-red-500' : 'bg-green-500/80 hover:bg-green-500'} cursor-pointer" data-part-id="${part.id}" data-server-id="${server.id}"></div>
                    `).join('')}
                </div>

                <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-400">Занято: <span class="text-white font-bold">${occupied}/${total}</span></span>
                    <span class="text-gray-400">Свободно: <span class="text-white font-bold">${total - occupied}</span></span>
                </div>
            </div>
        `;
    }).join('');

    // Обработка кликов на серверы и части
    document.querySelectorAll('.server-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const serverId = parseInt(card.dataset.serverId);
            const server = servers.find(s => s.id === serverId);
            
            document.querySelectorAll('.server-card').forEach(c => c.classList.remove('border-rose-500/50', 'bg-white/10'));
            card.classList.add('border-rose-500/50', 'bg-white/10');

            updateServerDetails(server);
        });
    });

    document.querySelectorAll('.server-part').forEach(part => {
        part.addEventListener('click', (e) => {
            e.stopPropagation();
            const serverId = parseInt(part.dataset.serverId);
            const partId = parseInt(part.dataset.partId);
            const server = servers.find(s => s.id === serverId);
            const partData = server.parts.find(p => p.id === partId);

            updateServerDetails(server, partData);
        });
    });

    // По умолчанию выбираем первый сервер
    if (servers.length > 0) {
        document.querySelector('.server-card').click();
    }
}

function updateServerDetails(server, selectedPart = null) {
    const detailsContent = document.getElementById('details-content');
    const occupied = server.parts.filter(p => p.occupied).length;
    const total = server.parts.length;
    const occupiedPercent = Math.round((occupied / total) * 100);

    if (selectedPart) {
        detailsContent.innerHTML = `
            <div class="border-b border-white/10 pb-4 mb-4">
                <h4 class="text-lg font-bold text-white">${selectedPart.name}</h4>
                <p class="text-sm text-gray-400 mt-2">Статус: <span class="font-bold ${selectedPart.occupied ? 'text-red-400' : 'text-green-400'}">${selectedPart.occupied ? 'Занято' : 'Свободно'}</span></p>
                <p class="text-sm text-gray-400 mt-1">${selectedPart.occupied ? 'Занято' : 'Доступен к заказу'}</p>
            </div>
            <div class="space-y-3">
                <div>
                    <p class="text-xs text-gray-500 uppercase tracking-wide">Сервер</p>
                    <p class="text-white font-medium">${server.name}</p>
                </div>
            </div>
        `;
    } else {
        const getUsageColor = (usage) => {
            if (usage < 40) return 'from-green-500 to-green-600';
            if (usage < 70) return 'from-yellow-500 to-yellow-600';
            return 'from-red-500 to-red-600';
        };

        detailsContent.innerHTML = `
            <div class="space-y-5">
                <div class="border-b border-white/10 pb-4">
                    <h3 class="text-lg font-bold text-white mb-3">${server.name}</h3>
                    <p class="text-sm text-gray-400"><i data-lucide="map-pin" class="inline w-4 h-4 mr-2"></i>${server.location}</p>
                </div>

                <div class="space-y-3">
                    <div>
                        <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">CPU</p>
                        <p class="text-white font-medium text-sm">${server.cpu}</p>
                        <p class="text-xs text-gray-400 mt-1">${server.cpuCores} ядер</p>
                    </div>

                    <div>
                        <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">RAM</p>
                        <p class="text-white font-medium text-sm">${server.ram} ${server.ramType}</p>
                    </div>

                    <div>
                        <p class="text-xs text-gray-500 uppercase tracking-wide mb-2">Хранилище</p>
                        <div class="space-y-1 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-400">NVMe:</span>
                                <span class="text-white font-medium">${server.nvme}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">SSD:</span>
                                <span class="text-white font-medium">${server.ssd}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">HDD:</span>
                                <span class="text-white font-medium">${server.hdd}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-t border-white/10 pt-4">
                    <p class="text-xs text-gray-500 uppercase tracking-wide mb-3 font-bold">Использование ресурсов</p>
                    
                    <div class="space-y-3">
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-xs text-gray-400">CPU</span>
                                <span class="text-xs font-bold text-white">${server.cpuUsage}%</span>
                            </div>
                            <div class="w-full bg-white/10 rounded-full h-2">
                                <div class="bg-gradient-to-r ${getUsageColor(server.cpuUsage)} h-2 rounded-full transition-all" style="width: ${server.cpuUsage}%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-xs text-gray-400">RAM</span>
                                <span class="text-xs font-bold text-white">${server.ramUsage}%</span>
                            </div>
                            <div class="w-full bg-white/10 rounded-full h-2">
                                <div class="bg-gradient-to-r ${getUsageColor(server.ramUsage)} h-2 rounded-full transition-all" style="width: ${server.ramUsage}%"></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-xs text-gray-400">Диск</span>
                                <span class="text-xs font-bold text-white">${server.diskUsage}%</span>
                            </div>
                            <div class="w-full bg-white/10 rounded-full h-2">
                                <div class="bg-gradient-to-r ${getUsageColor(server.diskUsage)} h-2 rounded-full transition-all" style="width: ${server.diskUsage}%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-t border-white/10 pt-4">
                    <p class="text-xs text-gray-500 uppercase tracking-wide mb-2">Ноды</p>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-400">Занято:</span>
                        <span class="text-white font-bold">${occupied}/${total}</span>
                    </div>
                    <div class="flex justify-between items-center mt-1">
                        <span class="text-sm text-gray-400">Свободно:</span>
                        <span class="text-white font-bold">${total - occupied}</span>
                    </div>
                </div>
            </div>
        `;

        lucide.createIcons();
    }
}

import { useEffect } from "react";

const AutoFleet = () => {
  // Внедрение нашего HTML через useEffect после монтирования компонента
  useEffect(() => {
    // Получение div контейнера
    const container = document.getElementById('auto-fleet-container');
    
    if (container) {
      // Устанавливаем HTML содержимое
      container.innerHTML = `
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>АвтоУчет - Система учета автотранспорта</title>
            <style>
                /* Базовые стили */
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                }
                
                body {
                    background-color: #f5f5f5;
                    color: #333;
                    line-height: 1.6;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                }
                
                /* Шапка */
                header {
                    background-color: #2c3e50;
                    color: #fff;
                    padding: 1rem 0;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                
                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    font-size: 1.5rem;
                }
                
                .logo-icon {
                    margin-right: 10px;
                    font-size: 24px;
                }
                
                nav ul {
                    display: flex;
                    list-style: none;
                }
                
                nav li {
                    margin-left: 1.5rem;
                }
                
                nav a {
                    color: #fff;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                nav a:hover {
                    color: #3498db;
                }
                
                /* Основной контент */
                .main-content {
                    padding: 2rem 0;
                }
                
                .dashboard-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                
                .dashboard-header h1 {
                    font-size: 1.8rem;
                    color: #2c3e50;
                }
                
                .action-buttons button {
                    background-color: #3498db;
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-left: 10px;
                    transition: background-color 0.3s;
                }
                
                .action-buttons button:hover {
                    background-color: #2980b9;
                }
                
                .action-buttons button.secondary {
                    background-color: #ecf0f1;
                    color: #2c3e50;
                }
                
                .action-buttons button.secondary:hover {
                    background-color: #bdc3c7;
                }
                
                /* Статистика */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                
                .stat-card {
                    background-color: white;
                    border-radius: 8px;
                    padding: 1.5rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }
                
                .stat-title {
                    color: #7f8c8d;
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                }
                
                .stat-value {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }
                
                .stat-trend {
                    display: flex;
                    align-items: center;
                    font-size: 0.8rem;
                    color: #7f8c8d;
                }
                
                .trend-up {
                    color: #2ecc71;
                }
                
                .trend-down {
                    color: #e74c3c;
                }
                
                .progress-bar {
                    height: 8px;
                    background-color: #ecf0f1;
                    border-radius: 4px;
                    margin-top: 10px;
                    overflow: hidden;
                }
                
                .progress-value {
                    height: 100%;
                    background-color: #2ecc71;
                    border-radius: 4px;
                }
                
                /* Вкладки */
                .tabs {
                    margin-bottom: 1.5rem;
                }
                
                .tab-buttons {
                    display: flex;
                    border-bottom: 1px solid #e1e1e1;
                }
                
                .tab-button {
                    padding: 10px 20px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    color: #7f8c8d;
                    position: relative;
                }
                
                .tab-button.active {
                    color: #3498db;
                    font-weight: bold;
                }
                
                .tab-button.active::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #3498db;
                }
                
                .tab-content {
                    display: none;
                    padding: 20px;
                    background-color: white;
                    border-radius: 0 0 8px 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }
                
                .tab-content.active {
                    display: block;
                }
                
                /* Таблица транспорта */
                .vehicles-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                
                .vehicles-table th {
                    text-align: left;
                    padding: 12px 15px;
                    background-color: #f8f9fa;
                    border-bottom: 1px solid #e1e1e1;
                    color: #2c3e50;
                    font-weight: 600;
                }
                
                .vehicles-table td {
                    padding: 12px 15px;
                    border-bottom: 1px solid #e1e1e1;
                }
                
                .vehicles-table tr:hover {
                    background-color: #f8f9fa;
                }
                
                .status-badge {
                    display: inline-block;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }
                
                .status-active {
                    background-color: #e8f5e9;
                    color: #2e7d32;
                }
                
                .status-maintenance {
                    background-color: #fff8e1;
                    color: #ff8f00;
                }
                
                .status-repair {
                    background-color: #ffebee;
                    color: #c62828;
                }
                
                .table-actions button {
                    background: none;
                    border: none;
                    color: #7f8c8d;
                    cursor: pointer;
                    padding: 5px;
                    margin-right: 5px;
                    transition: color 0.3s;
                }
                
                .table-actions button:hover {
                    color: #3498db;
                }
                
                .pagination {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1rem;
                }
                
                .page-info {
                    color: #7f8c8d;
                    font-size: 0.9rem;
                }
                
                .page-buttons button {
                    background-color: #ecf0f1;
                    border: none;
                    width: 30px;
                    height: 30px;
                    border-radius: 4px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 5px;
                    transition: background-color 0.3s;
                }
                
                .page-buttons button:hover {
                    background-color: #bdc3c7;
                }
                
                .page-buttons button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                /* Подвал */
                footer {
                    background-color: #2c3e50;
                    color: #ecf0f1;
                    padding: 1.5rem 0;
                    text-align: center;
                    font-size: 0.9rem;
                }
                
                /* Отзывчивый дизайн */
                @media (max-width: 768px) {
                    .header-content {
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    nav ul {
                        margin-top: 1rem;
                    }
                    
                    .dashboard-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    
                    .action-buttons {
                        margin-top: 1rem;
                    }
                    
                    .vehicles-table {
                        display: block;
                        overflow-x: auto;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Шапка -->
            <header>
                <div class="container header-content">
                    <div class="logo">
                        <span class="logo-icon">🚚</span>
                        <span>АвтоУчет</span>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#" class="active">Главная</a></li>
                            <li><a href="#">Автопарк</a></li>
                            <li><a href="#">Водители</a></li>
                            <li><a href="#">Отчеты</a></li>
                            <li><a href="#">Настройки</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            <!-- Основной контент -->
            <main class="main-content">
                <div class="container">
                    <div class="dashboard-header">
                        <h1>Система учета автотранспорта</h1>
                        <div class="action-buttons">
                            <button class="secondary">Отчеты</button>
                            <button>+ Добавить ТС</button>
                        </div>
                    </div>
                    
                    <!-- Статистика -->
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-title">Всего транспортных средств</div>
                            <div class="stat-value">24</div>
                            <div class="stat-trend">
                                <span class="trend-up">↑ 2</span> с прошлого месяца
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-title">В эксплуатации</div>
                            <div class="stat-value">18</div>
                            <div class="progress-bar">
                                <div class="progress-value" style="width: 75%"></div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-title">ТО запланировано</div>
                            <div class="stat-value">5</div>
                            <div class="stat-trend">на ближайшие 30 дней</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-title">В ремонте</div>
                            <div class="stat-value">2</div>
                            <div class="stat-trend">
                                <span class="trend-down">↓ 1</span> с прошлой недели
                            </div>
                        </div>
                    </div>
                    
                    <!-- Вкладки -->
                    <div class="tabs">
                        <div class="tab-buttons">
                            <button class="tab-button active" onclick="openTab(event, 'vehicles')">Автопарк</button>
                            <button class="tab-button" onclick="openTab(event, 'maintenance')">ТО и ремонты</button>
                            <button class="tab-button" onclick="openTab(event, 'drivers')">Водители</button>
                            <button class="tab-button" onclick="openTab(event, 'routes')">Маршруты</button>
                        </div>
                        
                        <div id="vehicles" class="tab-content active">
                            <table class="vehicles-table">
                                <thead>
                                    <tr>
                                        <th>Гос. номер</th>
                                        <th>Модель</th>
                                        <th>Тип ТС</th>
                                        <th>Статус</th>
                                        <th>Пробег</th>
                                        <th>Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>А123БВ77</td>
                                        <td>КАМАЗ 6520</td>
                                        <td>Грузовой</td>
                                        <td><span class="status-badge status-active">В эксплуатации</span></td>
                                        <td>45,230 км</td>
                                        <td class="table-actions">
                                            <button title="Просмотр">👁️</button>
                                            <button title="Редактировать">✏️</button>
                                            <button title="История">📋</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>В456ГД99</td>
                                        <td>ГАЗель Next</td>
                                        <td>Фургон</td>
                                        <td><span class="status-badge status-maintenance">ТО завтра</span></td>
                                        <td>67,410 км</td>
                                        <td class="table-actions">
                                            <button title="Просмотр">👁️</button>
                                            <button title="Редактировать">✏️</button>
                                            <button title="История">📋</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Е567ЖЗ77</td>
                                        <td>Scania R500</td>
                                        <td>Тягач</td>
                                        <td><span class="status-badge status-repair">В ремонте</span></td>
                                        <td>103,780 км</td>
                                        <td class="table-actions">
                                            <button title="Просмотр">👁️</button>
                                            <button title="Редактировать">✏️</button>
                                            <button title="История">📋</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>К890ЛМ50</td>
                                        <td>MAN TGX</td>
                                        <td>Тягач</td>
                                        <td><span class="status-badge status-active">В эксплуатации</span></td>
                                        <td>78,120 км</td>
                                        <td class="table-actions">
                                            <button title="Просмотр">👁️</button>
                                            <button title="Редактировать">✏️</button>
                                            <button title="История">📋</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Н901ОП77</td>
                                        <td>Mercedes Actros</td>
                                        <td>Тягач</td>
                                        <td><span class="status-badge status-active">В эксплуатации</span></td>
                                        <td>52,670 км</td>
                                        <td class="table-actions">
                                            <button title="Просмотр">👁️</button>
                                            <button title="Редактировать">✏️</button>
                                            <button title="История">📋</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div class="pagination">
                                <div class="page-info">Показано 5 из 24 ТС</div>
                                <div class="page-buttons">
                                    <button disabled>&lt;</button>
                                    <button>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                    <button>&gt;</button>
                                </div>
                            </div>
                        </div>
                        
                        <div id="maintenance" class="tab-content">
                            <h2>График ТО и ремонтов</h2>
                            <p>Запланировано 5 технических обслуживаний на ближайший месяц</p>
                            <p>В разработке...</p>
                        </div>
                        
                        <div id="drivers" class="tab-content">
                            <h2>Список водителей</h2>
                            <p>Всего в штате: 18 водителей</p>
                            <p>В разработке...</p>
                        </div>
                        
                        <div id="routes" class="tab-content">
                            <h2>Маршруты и рейсы</h2>
                            <p>Активные маршруты: 12</p>
                            <p>В разработке...</p>
                        </div>
                    </div>
                </div>
            </main>
            
            <!-- Подвал -->
            <footer>
                <div class="container">
                    <p>© 2025 АвтоУчет — Система учета автотранспорта. Все права защищены.</p>
                </div>
            </footer>
            
            <!-- JavaScript для работы вкладок -->
            <script>
                function openTab(evt, tabName) {
                    // Скрываем все вкладки
                    var tabContents = document.getElementsByClassName("tab-content");
                    for (var i = 0; i < tabContents.length; i++) {
                        tabContents[i].className = tabContents[i].className.replace(" active", "");
                    }
                    
                    // Удаляем класс "active" со всех кнопок вкладок
                    var tabButtons = document.getElementsByClassName("tab-button");
                    for (var i = 0; i < tabButtons.length; i++) {
                        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
                    }
                    
                    // Показываем выбранную вкладку и добавляем класс "active" кнопке
                    document.getElementById(tabName).className += " active";
                    evt.currentTarget.className += " active";
                }
            </script>
        </body>
        </html>
      `;
    }
  }, []);

  return <div id="auto-fleet-container" className="w-full min-h-screen"></div>;
};

export default AutoFleet;

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  br: {
    translation: {
      Sales: 'Vendas',
      'All Spending': 'Todos os Gastos',
      Earnings: 'Ganhos',
      'Weekly revenue': 'Ganhos Semanais',
      'New Clients': 'Novos Clientes',
      'Total Spent': 'Total Gasto',
      Analytics: 'Analise',
      'Recent Orders': 'Pedidos Recentes',
      'Top selling Products': 'Produtos mais vendidos',
      'Congratulations Watson!': 'parabéns Watson!',
      Revenue: 'Ganhos',
      'Repeat Purchase': 'Repetir Compra',
      'Average Order': 'Media Pedidos',
      'New Customers': 'Novos Clientes',
      'Earnings Report': 'Relatorio de ganhos',
      'Total Sales': 'Total de Vendas',
      'Calculated in last 7 days': 'Calculado nos ultimos 7 dias',
      'View Full Report': 'Ver Todo Relatorio',
      'Popular Products': 'Produtos Populares',
      'Sales By Country': 'Venda por pais',
      'Sales Product Details': 'detalhe de venda por produto',

      'Project Management': 'Gerenciamento de Projeto',
      'Recent Projects': 'Projeto recente',
      'More than 50+ new projects running':
        'Mais de 50+ novos projetos executando',
      'Total Project Completion Rate': 'Taxa de completação de projeto',
      'Team Progress': 'Progresso do time',
      'Todo List': 'Lista de afazeres',
      'Uko Dashboard & UI kit': 'Uko Dashboard & UI kit',

      'Clean design & code for your next project.':
        'Clean design & code for your next project.',

      'Project Management V2': 'Gerenciamento de Projeto V2',
      Progress: 'Progress',
      'Recent Activity': 'Atividade Recente',
      Projects: 'Projetos',
      'Task Progress': 'Progresso de tarefa',
      Teams: 'Times',
      'Karen leave some comments on Konsep Ilustrasi':
        'Karen leave some comments on Konsep Ilustrasi',

      'Karen change project info on Project Homepage':
        'Karen change project info on Project Homepage',

      'Andrea change the due date of Project Homepage':
        'Andrea change the due date of Project Homepage',
      'Web Design': 'Web Design',
      'Project Nightfall': 'Project Nightfall',
      'Load More': 'Load More',
      Copywriting: 'Copywriting',
      Illustrations: 'Illustrations',
      'UI Design': 'UI Design',

      'Account Settings': 'Configuração de conta',
      'User Profile': 'Perfil de Usuario',
      'User Info': 'Informação de Usuario',
      Experiences: 'Experiencias',
      Skills: 'Abilidades',
      Password: 'Senha',
      Preferences: 'Preferencias',
      'Connected Accounts': 'Contas Conectadas',
      'Recent Devices': 'Dispositivo recente',
      Notifications: 'Notificações',
      'Social Accounts': 'Contas Social',
      'Edit your account information:': 'Editar informação da conta:',
      'Professional Info': 'Informação Proficional',
      'Social Profiles': 'Perfil Social',
      Save: 'Salvar',
      Cancel: 'Cancelar',
      no: 'Não',
      yes: 'Sim',
      'During the past 2 years, have you received any medical treatment?':
        'Durante os últimos 2 anos recebeu algum tratamento médico?',
      'Work Experiences': 'Experiencias de Trabalho',
      'Do you take any medications?': 'Você toma algum Medicamento?',
      'Suicide thoughts or attempts?': 'Pensamentos ou tentativas de suicídio?',
      'Sleep quality': 'Qualidade do sono:',
      'Are you eating:': 'Se Alimenta:',
      'New Skill': 'Nova Habilidade',
      'Change Your Password': 'Trocar Senha',
      'Password requirements:': 'Requisitos da Senha:',
      'Save Changes': 'Salvar Alterações',
      'Do you often feel dizzy or faint?':
        'Costuma sentir tonturas ou ter desmaios?',
      Well: 'Bem',
      Regular: 'Regular',
      Bad: 'Péssima',
      'Water intake (glasses/day):': 'Ingestão de água (copos/ dia)',
      '2 - Family Background (first degree):':
        '2 - Antecedentes Familiares (em primeiro grau):',
      'Physical/Mental Disability:': 'Deficiência Física/ mental:',
      Who: 'Quem?',
      'Aggressiveness?': 'Agressividade?',
      'Alcoholism?': 'Alcoolismo?',
      'Drugs?': 'Drogas?',
      'Suicide?': 'Suicídio?',
      '3 - History of psychoactive substance use':
        '3 - Histórico de uso de substância psicoativa',
      Following: 'Seguindo',
      Followers: 'Seguidores',
      About: 'Sobre',
      Profile: 'Perfil',
      Follower: 'Seguidores',
      Friends: 'Amigos',
      Gallery: 'Galeria',

      'Data Table V1': 'Tabela de Dados',
      Users: 'Usuarios',
      'All Users': 'Todos os Usuarios',
      Editor: 'Editor',
      Contributor: 'Contribuidor',
      Administrator: 'Administrador',
      Subscriber: 'Inscrito',
      'Add New User': 'Adicionar novo Usuario',
      'Data Table V2': 'Tabela de Dados V2',
      'Add Employee': 'Adicionar Funcionario',

      'Product List': 'Lista de Produtos',
      'Add Products': 'Adicionar Produtos',
      'Order List': 'Lista de Pedidos',
      All: 'Todos',
      Available: 'Disponivel',
      Disabled: 'Deficiente',
      'Customer List': 'Lista de Clientes',
      Active: 'Ativo',
      Blocked: 'Bloqueado',
      'Add Customer': 'Adicionar Cliente',

      Shop: 'Loja',
      'Uko Ecommerce': 'Uko Ecommerce',
      Categories: 'Categorias',
      'Sort By': 'Ordenar por',
      'Price Range': 'Faixa de Preço',
      'View Cart': 'Ver Carrinho',
      Shoes: 'Sapato',
      Furniture: 'Mobília',
      Clothes: 'Roupas',
      Accessories: 'Acessórios',
      Others: 'Outros',
      Newest: 'Mais Recentes',
      Popular: 'Popular',
      Default: 'Padrão',
      'Price: high to low': 'Preço: Maior para Menor',
      'Price: low to high': 'Preço: Menor para Maior',

      Cart: 'Carrinho',
      'Order Summery': 'Sumário de Pedidos',
      Subtotal: 'Subtotal',
      Discount: 'Disconto',
      'Shipping Cost': 'Custo de Frete',
      Total: 'Total',
      'Proceed to payment': 'Proceder para o Pagamento',

      Payment: 'Pagamento',
      'Payment Success': 'Pagamento Realizado',
      Success: 'Sucesso',
      'Back to order': 'Retornar ao Pedido',

      'Invoice List': 'Lista de Fatura',
      'Add New': 'Adicionar Novo',
      'Add Invoice': 'Adicionar Fatura',
      'Order Status': 'Status de Pedido',
      Pending: 'Pendente',
      Processing: 'Processando',
      Delivered: 'Entregue',
      Amount: 'Quantidade',
      'Add New Item': 'Adicionar novo Item',
      Delete: 'Apagar',

      'Invoice Details': 'Detalhe de Fatura',
      'Invoice Info': 'Informação da Fatura',
      'Order Number': 'Numero de Pedido',
      'Order Date': 'Data do Pedido',
      'Bill To': 'Conta para',
      'Bill from': 'Conta para',
      Client: 'Cliente',
      'Item Name': 'Nome do Item ',
      Price: 'Preço',
      Quantity: 'Quantidade',

      'User Grid': 'Grade de Usuario',
      'User List': 'Lista de Usuario',
      'Uko Project V1': 'Uko Project V1',
      'Uko Project V2': 'Uko Project V2',
      'Uko Project V3': 'Uko Project V3',
      'Project Details': 'Detalhe de Projeto',
      'Team Member': 'Membros do Time',
      'To Do List': 'Lista de Afazeres',
      'To do': 'A Fazer',
      'In Progress': 'Em progresso',
      Done: 'Pronto',
      Chat: 'Chat',
      Calendar: 'Calendario',
      Contact: 'Contato',
      Privacy: 'Privacidade',
      Pricing: 'Preços',
      Groups: 'Grupos',
    },
  },
  en: {
    translation: {
      Groups: 'Groups',
      Sales: 'Sales',
      'All Spending': 'All Spending',
      Earnings: 'Earnings',
      'Weekly revenue': 'Weekly revenue',
      'New Clients': 'New Clients',
      'Total Spent': 'Total Spent',
      Analytics: 'Analytics',
      'Recent Orders': 'Recent Orders',
      'Top selling Products': 'Top selling Products',
      'Congratulations Watson!': 'Congratulations Watson!',
      Revenue: 'Revenue',
      'Repeat Purchase': 'Repeat Purchase',
      'Average Order': 'Average Order',
      'New Customers': 'New Customers',
      'Earnings Report': 'Earnings Report',
      'Total Sales': 'Total Sales',
      'Calculated in last 7 days': 'Calculated in last 7 days',
      'View Full Report': 'View Full Report',
      'Popular Products': 'Popular Products',
      'Sales By Country': 'Sales By Country',
      'Sales Product Details': 'Sales Product Details',

      'Project Management': 'Project Management',
      'Recent Projects': 'Recent Projects',
      'More than 50+ new projects running':
        'More than 50+ new projects running',
      'Total Project Completion Rate': 'Total Project Completion Rate',
      'Team Progress': 'Team Progress',
      'Todo List': 'Todo List',
      'Uko Dashboard & UI kit': 'Uko Dashboard & UI kit',

      'Clean design & code for your next project.':
        'Clean design & code for your next project.',

      'Project Management V2': 'Project Management V2',
      Progress: 'Progress',
      'Recent Activity': 'Recent Activity',
      Projects: 'Projects',
      'Task Progress': 'Task Progress',
      Teams: 'Teams',
      'Karen leave some comments on Konsep Ilustrasi':
        'Karen leave some comments on Konsep Ilustrasi',

      'Karen change project info on Project Homepage':
        'Karen change project info on Project Homepage',

      'Andrea change the due date of Project Homepage':
        'Andrea change the due date of Project Homepage',
      'Web Design': 'Web Design',
      'Project Nightfall': 'Project Nightfall',
      'Load More': 'Load More',
      Copywriting: 'Copywriting',
      Illustrations: 'Illustrations',
      'UI Design': 'UI Design',

      'Account Settings': 'Account Settings',
      'User Profile': 'User Profile',
      'User Info': 'User Info',
      Experiences: 'Experiences',
      Skills: 'Skills',
      Password: 'Password',
      Preferences: 'Preferences',
      'Connected Accounts': 'Connected Accounts',
      'Recent Devices': 'Recent Devices',
      Notifications: 'Notifications',
      'Social Accounts': 'Social Accounts',
      'Edit your account information:': 'Edit your account information:',
      'Professional Info': 'Professional Info',
      'Social Profiles': 'Social Profiles',
      Save: 'Save',
      Cancel: 'Cancel',
      no: 'No',
      yes: 'Yes',
      'During the past 2 years, have you received any medical treatment? ':
        'During the past 2 years, have you received any medical treatment? ',
      'Do you take any medications?': 'Do you take any medications?',
      'Do you often feel dizzy or faint?': 'Do you often feel dizzy or faint? ',
      'Suicide thoughts or attempts?': 'Suicide thoughts or attempts?',
      'Sleep quality': 'Sleep quality:',
      Well: 'Well',
      Regular: 'Regular',
      Bad: 'Bad',
      'Are you eating:': 'Are you eating:',
      'Water intake (glasses/day):': 'Water intake (glasses/day)',
      '2 - Family Background (first degree):':
        '2 - Family Background (first degree):',
      'Physical/Mental Disability:': 'Physical/Mental Disability:',
      Who: 'Who?',
      'Aggressiveness?': 'Aggressiveness?',
      'Alcoholism?': 'Alcoholism?',
      'Drugs?': 'Drugs?',
      'Suicide?:': 'Suicide?',
      '3 - History of psychoactive substance use':
        '3 - History of psychoactive substance use',
      'Work Experiences': 'Work Experiences',
      Stacks: 'Stacks',
      'New Skill': 'New Skill',
      'Change Your Password': 'Change Your Password',
      'Password requirements:': 'Password requirements:',
      'Save Changes': 'Save Changes',
      Following: 'Following',
      Followers: 'Followers',
      About: 'About',
      Profile: 'Profile',
      Follower: 'Follower',
      Friends: 'Friends',
      Gallery: 'Gallery',

      'Data Table V1': 'Data Table V1',
      Users: 'Users',
      'All Users': 'All Users',
      Editor: 'Editor',
      Contributor: 'Contributor',
      Administrator: 'Administrator',
      Subscriber: 'Subscriber',
      'Add New User': 'Add New User',
      'Data Table V2': 'Data Table V2',
      'Add Employee': 'Add Employee',

      'Product List': 'Product List',
      'Add Products': 'Add Products',
      'Order List': 'Order List',
      All: 'All',
      Available: 'Available',
      Disabled: 'Disabled',
      'Customer List': 'Customer List',
      Active: 'Active',
      Blocked: 'Blocked',
      'Add Customer': 'Add Customer',

      Shop: 'Shop',
      'Uko Ecommerce': 'Uko Ecommerce',
      Categories: 'Categories',
      'Sort By': 'Sort By',
      'Price Range': 'Price Range',
      'View Cart': 'View Cart',
      Shoes: 'Shoes',
      Furniture: 'Furniture',
      Clothes: 'Clothes',
      Accessories: 'Accessories',
      Others: 'Others',
      Newest: 'Newest',
      Popular: 'Popular',
      Default: 'Default',
      'Price: high to low': 'Price: high to low',
      'Price: low to high': 'Price: low to high',

      Cart: 'Cart',
      'Order Summery': 'Order Summery',
      Subtotal: 'Subtotal',
      Discount: 'Discount',
      'Shipping Cost': 'Shipping Cost',
      Total: 'Total',
      'Proceed to payment': 'Proceed to payment',

      Payment: 'Payment',
      'Payment Success': 'Payment Success',
      Success: 'Success',
      'Back to order': 'Back to order',

      'Invoice List': 'Invoice List',
      'Add New': 'Add New',
      'Add Invoice': 'Add Invoice',
      'Order Status': 'Order Status',
      Pending: 'Pending',
      Processing: 'Processing',
      Delivered: 'Delivered',
      Amount: 'Amount',
      'Add New Item': 'Add New Item',
      Delete: 'Delete',

      'Invoice Details': 'Invoice Details',
      'Invoice Info': 'Invoice Info',
      'Order Number': 'Order Number',
      'Order Date': 'Order Date',
      'Bill To': 'Bill To',
      'Bill from': 'Bill from',
      Client: 'Client',
      'Item Name': 'Item Name',
      Price: 'Price',
      Quantity: 'Quantity',

      'User Grid': 'User Grid',
      'User List': 'User List',
      'Uko Project V1': 'Uko Project V1',
      'Uko Project V2': 'Uko Project V2',
      'Uko Project V3': 'Uko Project V3',
      'Project Details': 'Project Details',
      'Team Member': 'Team Member',
      'To Do List': 'To Do List',
      'To do': 'To do',
      'In Progress': 'In Progress',
      Done: 'Done',
      Chat: 'Chat',
      Calendar: 'Calendar',
      Contact: 'Contact',
      Privacy: 'Privacy',
      Pricing: 'Pricing',
    },
  },
  es: {
    translation: {
      Sales: 'Ventas',
      'All Spending': 'Todo el gasto',
      Earnings: 'Ganancias',
      'Weekly revenue': 'Ingresos semanales',
      'New Clients': 'Nuevos clientes',
      'Total Spent': 'Total gastado',
      Analytics: 'Analítica',
      'Recent Orders': 'órdenes recientes',
      'Top selling Products': 'Los productos más vendidos',
      'Congratulations Watson!': '¡Felicitaciones Watson!',
      Revenue: 'Ingresos',
      'Repeat Purchase': 'Repetir compra',
      'Average Order': 'Orden promedio',
      'New Customers': 'Nuevas clientas',
      'Earnings Report': 'Informe de ganancias',
      'Total Sales': 'Ventas totales',
      'Calculated in last 7 days': 'Calculado en los últimos 7 días',
      'View Full Report': 'Ver informe completo',
      'Popular Products': 'productos populares',
      'Sales By Country': 'Ventas por país',
      'Sales Product Details': 'Detalles del producto de ventas',

      'Project Management': 'Gestión de proyectos',
      'Recent Projects': 'proyectos recientes',

      'More than 50+ new projects running':
        'Más de 50 proyectos nuevos en ejecución',

      'Total Project Completion Rate':
        'Tasa total de finalización del proyecto',

      'Team Progress': 'Progreso del equipo',
      'Todo List': 'Lista de quehaceres',
      'Uko Dashboard & UI kit':
        'Panel de control de Uko y kit de interfaz de usuario',

      'Clean design & code for your next project.':
        'Tema bien diseñado para hacer todo mejor',

      'Project Management V2': 'Gestión de proyectos V2',
      Progress: 'Progreso',
      'Recent Activity': 'Actividad reciente',
      Projects: 'Proyectos',
      'Task Progress': 'Progreso de la tarea',
      Teams: 'Equipos',
      'Karen leave some comments on Konsep Ilustrasi':
        'Karen deja algunos comentarios en Konsep Ilustrasi',
      'Karen change project info on Project Homepage':
        'Karen cambia la información del proyecto en la página de inicio del proyecto',
      'Andrea change the due date of Project Homepage':
        'Andrea cambia la fecha de vencimiento de la página de inicio del proyecto',
      'Web Design': 'Diseño web',
      'Project Nightfall': 'Proyecto Nightfall',
      'Load More': 'Carga más',
      Copywriting: 'Redacción',
      Illustrations: 'Ilustraciones',
      'UI Design': 'Diseño de interfaz de usuario',

      'Account Settings': 'Configuraciones de la cuenta',
      'User Profile': 'Perfil del usuario',
      'User Info': 'Información de usuario',
      Experiences: 'Experiencias',
      Skills: 'Habilidades',
      Password: 'Contraseña',
      Preferences: 'Preferencias',
      'Connected Accounts': 'Cuentas conectadas',
      'Recent Devices': 'Dispositivos recientes',
      Notifications: 'Notificaciones',
      'Social Accounts': 'Cuentas sociales',
      'Edit your account information:': 'Edite la información de su cuenta:',
      'Professional Info': 'Informacion profesional',
      'Social Profiles': 'perfiles sociales',
      Save: 'Ahorrar',
      Cancel: 'Cancelar',
      'Work Experiences': 'Experiencia laboral',
      Stacks: 'Pilas',
      'New Skill': 'Nueva habilidad',
      'Change Your Password': 'Cambia tu contraseña',
      'Password requirements:': 'Requisitos de contraseña:',
      'Save Changes': 'Guardar cambios',
      Following: 'Siguiente',
      Followers: 'Seguidoras',
      About: 'Sobre',
      Profile: 'Perfil',
      Follower: 'Seguidora',
      Friends: 'Amigas',
      Gallery: 'Galería',

      'Data Table V1': 'Tabla de datos V1',
      Users: 'Usuarias',
      'All Users': 'Todas las usuarias',
      Editor: 'Editora',
      Contributor: 'Contribuyente',
      Administrator: 'Administradora',
      Subscriber: 'Abonado',
      'Add New User': 'Agregar nueva usuaria',
      'Data Table V2': 'Tabla de datos V2',
      'Add Employee': 'Agregar empleada',

      'Product List': 'Lista de productos',
      'Add Products': 'Agregar productos',
      'Order List': 'Lista de pedidos',
      All: 'Todo',
      Available: 'Disponible',
      Disabled: 'Discapacitado',
      'Customer List': 'Lista de clientes',
      Active: 'Activa',
      Blocked: 'Obstruida',
      'Add Customer': 'Agregar cliente',

      Shop: 'Tienda',
      'Uko Ecommerce': 'Comercio electrónico de Uko',
      Categories: 'Categorías',
      'Sort By': 'Ordenar por',
      'Price Range': 'Rango de precios',
      'View Cart': 'Ver carrito',
      Shoes: 'Zapatos',
      Furniture: 'Muebles',
      Clothes: 'Ropa',
      Accessories: 'Accesorios',
      Others: 'Otras',
      Newest: 'La mas nueva',
      Popular: 'Popular',
      Default: 'Defecto',
      'Price: high to low': 'Precio: de mayor a menor',
      'Price: low to high': 'Precio: baja a alta',

      Cart: 'Carro',
      'Order Summery': 'Resumen de la orden',
      Subtotal: 'Total parcial',
      Discount: 'Descuento',
      'Shipping Cost': 'Costo de envío',
      Total: 'Total',
      'Proceed to payment': 'Proceder Al Pago',

      Payment: 'Pago',
      'Payment Success': 'Pago Exitoso',
      Success: 'Éxito',
      'Back to order': 'Volver al pedido',

      'Invoice List': 'Lista de facturas',
      'Add New': 'Agregar nueva',
      'Add Invoice': 'Agregar factura',
      'Order Status': 'Estado de la orden',
      Pending: 'Pendiente',
      Processing: 'Procesando',
      Delivered: 'Entregada',
      Amount: 'Monto',
      'Add New Item': 'Agregar ítem nuevo',
      Delete: 'Borrar',

      'Invoice Details': 'Detalles de la factura',
      'Invoice Info': 'Información de la factura',
      'Order Number': 'Número de orden',
      'Order Date': 'Fecha de orden',
      'Bill To': 'Cobrar a',
      'Bill from': 'Factura de',
      Client: 'Cliente',
      'Item Name': 'Nombre del árticulo',
      Price: 'Precio',
      Quantity: 'Cantidad',

      'User Grid': 'Cuadrícula de usuario',
      'User List': 'Lista de usuarios',
      'Uko Project V1': 'Proyecto Uko V1',
      'Uko Project V2': 'Proyecto Uko V2',
      'Uko Project V3': 'Proyecto Uko V3',
      'Project Details': 'Detalles del proyecto',
      'Team Member': 'Miembro del equipo',

      'To Do List': 'Lista de quehaceres',
      'To do': 'Hacer',
      'In Progress': 'En curso',
      Done: 'Hecho',
      Chat: 'Chat',
      Calendar: 'Calendario',
      Contact: 'Contacto',
      Privacy: 'Intimidad',
      Pricing: 'Precios',
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'br',
  fallbackLng: 'br',
  interpolation: { escapeValue: false },
});
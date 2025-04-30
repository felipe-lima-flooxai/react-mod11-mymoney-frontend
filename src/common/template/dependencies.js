// src/common/template/dependencies.js

// JS (jQuery, Bootstrap, AdminLTE e plugins opcionais)
import $ from 'jquery';
window.$ = $; // Define globalmente
import 'bootstrap/dist/js/bootstrap.min.js';
import 'admin-lte/dist/js/adminlte.min.js';

// Plugins extras (se necessário)
import 'admin-lte/plugins/fastclick/fastclick.js';
import 'admin-lte/plugins/slimScroll/jquery.slimscroll.min.js';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import 'admin-lte/plugins/iCheck/flat/blue.css'; // Opcional

// CSS personalizado (crie um arquivo em src/common/template/custom.css)
import './custom.css';
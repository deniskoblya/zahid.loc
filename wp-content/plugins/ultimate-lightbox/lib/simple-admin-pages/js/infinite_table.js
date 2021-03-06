/**
 * Javascript functions for Infinite Table
 *
 * @package Simple Admin Pages
 */

jQuery(document).ready(function ($) {

  // disable options where not required initially
  $('.sap-infinite-table table tbody tr').each((idx_tr, tr) => {
    let val = $(tr).find('[data-name="cf_type"]').val();
    
    if(!['dropdown', 'checkbox', 'radio'].includes(val)) {
      $(tr).find('[data-name="cf_options"]').val('').prop('readonly', true);
    }
  });

  // process fields
  $('.sap-parent-form').on('submit', function (ev) {
    var _form = $(this), ignore;
    var main_input = $('#sap-infinite-table-main-input');

    var main_input_val = [];

    $('.sap-infinite-table table tbody tr').each((idx_tr, tr) => {
      let record = {}; ignore = false;

      $(tr).find('td').each((idx_td, td) => {
        let elm = $(td).find('select, input');

        ignore =  'cf_field_name' == elm.data('name') && elm.val().length < 1 ? true : ignore;

        if(!ignore) {
          record[elm.data('name')] = elm.val();
        }
      });

      !ignore ? main_input_val.push(record) : null;
    });

    main_input.val(JSON.stringify(main_input_val));
  });

  // Add new field
  $('.sap-infinite-table-add-row .sap-new-admin-add-button').on('click', function (ev) {
    let _template_tr = $('.sap-infinite-table tfoot .sap-infinite-table-row-template').clone();
    _template_tr
      .hide()
      .removeClass()
      .addClass('sap-infinite-table-row');
    $('.sap-infinite-table table tbody').append(_template_tr);
    _template_tr.fadeIn('fast');
    _template_tr.find('[data-name="cf_options"]').prop('readonly', true);
  });

  // update options field
  $(document).on('change', '.sap-infinite-table-row [data-name="cf_type"]', function (ev) {
    let parent_tr = $(this).parents('tr').eq(0);
    
    if(!['dropdown', 'checkbox', 'radio'].includes($(this).val())) {
      parent_tr.find('[data-name="cf_options"]').val('').prop('readonly', true);
    }
    else {
      parent_tr.find('[data-name="cf_options"]').prop('readonly', false);
    }
  });

  // Remvoe field
  $(document).on('click', '.sap-infinite-table-row .sap-infinite-table-row-delete', function (ev) {
    let parent_tr = $(this).parents('tr').eq(0);
    parent_tr.fadeOut('fast', () => parent_tr.remove());
  });

  $('.sap-infinite-table table tbody').sortable({
    axis: 'y'
  });

})
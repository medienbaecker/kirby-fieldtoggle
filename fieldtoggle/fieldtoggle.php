<?php

class FieldToggleField extends RadioField {

  // Get JS and CSS files from the assets folder
  static public $assets = array(
    'js' => array(
      'f.js'
    ),
    'css' => array(
      'style.css'
    )
  );

  // Add information to the field data so we can access it with JavaScript
  public function item($value, $text) {
    $item = parent::item($value, $text);
    $item->addClass('fieldtoggle');

    if (isset($this->show)) {
      foreach ($this->show as $okey => $ovalue) {
        if ($value == $okey) {
          $item->data("show", $ovalue);
        }
      }
    }

    if (isset($this->hide)) {
      foreach ($this->hide as $okey => $ovalue) {
        if ($value == $okey) {
          $item->data("hide", $okey);
        }
      }
    }




    return $item;
  }

}

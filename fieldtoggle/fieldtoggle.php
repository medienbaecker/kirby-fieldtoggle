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

    if (isset($this->on)) {
      foreach ($this->on as $okey => $ovalue) {
        if ($value == $okey) {
          $item->data("on", $ovalue);
        }
      }
    }

    if (isset($this->off)) {
      foreach ($this->off as $okey => $ovalue) {
        if ($value == $okey) {
          $item->data("off", $okey);
        }
      }
    }




    return $item;
  }

}

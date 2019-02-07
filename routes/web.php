<?php

Route::get('/{all?}', function () {
  return view('pages.index');
})->where('all', '.*');

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::post('/logout', 'AuthController@logout');

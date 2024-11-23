<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;

Route::get('/', function () {
    return view('welcome');
});

Route::get('api/users', function () {
    $users = User::select('id', 'name', 'email')->get();
    // $users = [
    //     ['id' => 1, 'name' => 'User A', 'email' => 'usera@example.com'],
    //     ['id' => 2, 'name' => 'User B', 'email' => 'userb@example.com'],
    //     ['id' => 3, 'name' => 'User C', 'email' => 'userc@example.com'],
    // ];

    return response()->json($users);
});
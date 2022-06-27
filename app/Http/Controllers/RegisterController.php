<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function create()
    {
        return inertia('Auth/Register');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'name' => 'required',
            'email' => 'required|min:10|max:100|unique:users|email:dns',
            'username' => 'required|min:3|max:25|unique:users|alpha_num',
            'password' => ['required', 'min:6', 'max:16'],
            'location' => 'required'
        ]);

        User::create($attributes);

        return redirect('login')->with([
            'type' => 'success',
            'message' => 'Registration successful. Please login to continue',
        ]);
    }
}

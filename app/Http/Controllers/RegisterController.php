<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

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
            'password' => ['required', 'min:6', 'max:16', Password::defaults()],
            'location' => 'required'
        ]);

        // encrypt password to hash
        $attributes['password'] = Hash::make($attributes['password']);

        User::create($attributes);

        return redirect('login')->with([
            'type' => 'success',
            'message' => 'Registration successful. Please login to continue',
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function create()
    {
        return inertia('Auth/Register');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|min:3|max:100',
            'email' => 'required|min:10|max:100|unique:users|email:dns',
            'username' => 'required|min:3|max:25|unique:users',
            'password' => 'required|min:6|max:100|',
            'location' => 'required|min:6|max:255|'
        ]);

        // encrypt password to hash
        $validatedData['password'] = Hash::make($validatedData['password']);

        User::create($validatedData);

        return redirect('login')->with([
            'type' => 'success',
            'message' => 'Registration successful. Please login to continue',
        ]);
    }
}

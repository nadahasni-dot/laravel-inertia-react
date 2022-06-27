<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return inertia('Users/Index', [
            'users' => User::latest()->paginate(10),
            'isAdmin' => $request->user()->can('admin'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $this->authorize('admin', Auth::user());
        $attributes = $request->toArray();

        User::create($attributes);

        return back()->with([
            'type' => 'success',
            'message' => 'User was successfully created.',
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $this->authorize('admin', Auth::user());
        $attributes = $request->validate(
            [
                'name' => 'required|min:3|max:100',
                'email' => ['required', 'min:10', 'max:100', 'email:dns', Rule::unique('users')->ignore($user->id)],
                'username' => ['required', 'min:3', 'max:25', 'alpha_num', Rule::unique('users')->ignore($user->id)],
                'location' => 'required|min:6|max:255|'
            ]
        );

        $user->update($attributes);

        return back()->with([
            'type' => 'success',
            'message' => 'User updated successfully.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $this->authorize('admin', Auth::user());
        $user->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'User deleted successfully.',
        ]);
    }
}

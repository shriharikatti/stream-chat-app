import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input';

function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] p-4'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md'>
        <h2 className='text-3xl font-bold text-white text-center mb-6'>Login to StreamChat</h2>
        <form  className='space-y-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-1'>Email</label>
              <Input
                type='email'
                id='email'
                placeholder="you@example.com"
                className='w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
              />
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-300 mb-1'>Password</label>
              <Input
                type='password'
                id='password'
                placeholder='••••••••'
                className='w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
              />
            </div>

            <Button type='submit' className='w-full bg-blue-600 hover-bg-blue-700 text-white font-semibold    py-2 rounded-md transition-colors duration-200'>
              Login
            </Button>
        </form>

        <p className='mt-6 text-center text-gray-400'>
          Don't have an account? <Link to='/signup' className='text-blue-400 hover:underline'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage
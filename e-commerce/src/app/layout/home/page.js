import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

const Page = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>This is Home page</h1>
      </div>
    </ProtectedRoute>
  )
}

export default Page

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { payloadClient } from '@/lib/payload'
import { Media } from '@/payload-types'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const LoginPage = async () => {
  const payload = await payloadClient()

  const { docs } = await payload.find({
    collection: 'AuthPages',
    limit: 1,
    where: {
      slug: {
        equals: 'login',
      },
    },
  })

  const page = docs[0]

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Columna Izquierda */}
      <div
        className="md:flex-1 h-1/3 md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${(page?.image as Media)?.url || ''})` }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-start text-left text-white p-6">
          <h1
            className="text-2xl md:text-4xl font-bold mb-2 md:mb-4"
            style={{ color: page.color || 'white' }}
          >
            {page?.title || 'Add your title here'}
          </h1>
          <p
            style={{ color: page.color || 'white' }}
            dangerouslySetInnerHTML={{
              __html: page.description || 'You can add extra text here for more description',
            }}
          />
        </div>
      </div>

      {/* Columna Derecha */}
      <div className="flex-1 flex items-center justify-center flex-col p-6">
        <form className="w-full max-w-md bg-white">
          <div className="w-full my-5">
            <Button variant="outline" asChild>
              <Link href="/">
                <ChevronLeft />
              </Link>
            </Button>
          </div>
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6">Welcome Back Please login</h2>
            <hr className="border-dotted my-7" />
          </div>
          <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </Label>
            <Input type="email" id="email" placeholder="Enter your email" className="w-full" />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full"
            />
          </div>
          <div className="flex justify-between gap-2 items-center">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button type="button" variant="outline" asChild className="w-full">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

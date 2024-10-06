import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { UserIcon, LogOutIcon, LogInIcon } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'

export function ModalUserLogin() {
  const { data: session, status } = useSession()

  const handleLogin = async () => {
    await signIn()
  }

  const handleLogOut = async () => {
    await signOut()
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon'>
          <UserIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side='right'>
        <div className='mt-2 flex flex-col gap-4'>
          {status === 'authenticated' && session?.user && (
            <div className='flex flex-clo'>
              <div className='flex item-center gap-2 my-4'>
                <Avatar>
                  <AvatarFallback>
                    {session.user.name?.[0]?.toUpperCase() ?? ''}
                  </AvatarFallback>
                  {session.user.image && (
                    <AvatarImage src={session.user.image} />
                  )}
                </Avatar>

                <div className='flex flex-col'>
                  <p className='font-medium'>{session.user.name}</p>
                  <span className='text-sm opacity-60'>Boas compras!</span>
                </div>
              </div>
            </div>
          )}

          {status === 'authenticated' ? (
            <Button
              variant='outline'
              size='icon'
              className='w-full gap-2 justify-start px-2'
              onClick={handleLogOut}
            >
              <LogOutIcon size={16} />
              Sair
            </Button>
          ) : (
            <Button
              variant='outline'
              size='icon'
              className='w-full gap-2 justify-start px-2'
              onClick={handleLogin}
            >
              <LogInIcon size={16} />
              Fazer login
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

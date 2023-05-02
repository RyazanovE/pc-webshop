import { ReactNode } from 'react'
import { AuthHeader } from 'src/entities/header'
import Header from 'src/widgets/header/ui/main-header'
import { WithContainer } from '../with-container'

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <WithContainer>
        <AuthHeader />
      </WithContainer>
      <WithContainer sx={{ position: "sticky", zIndex: 100, top: 4 }}>
        <Header />
      </WithContainer>
      <main>
        {children}
      </main>
    </>
  )
}

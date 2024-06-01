import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/default'
import { NextPageWithLayout } from '../_app'
import ProPage from '@/views/pro'

const TabelaFipeScreen: NextPageWithLayout = () => {
  return <ProPage />
}

TabelaFipeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TabelaFipeScreen

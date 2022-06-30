import Head from 'next/head'
import Image from 'next/image'
import GradientLayout from '../components/gradientLayout'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <GradientLayout
      color="green"
      roundImage=""
      subtitle="profile"
      title="Scott Moss"
      description="15 public playlists"
    >
      <div>home page</div>
    </GradientLayout>
  )
}

export default Home

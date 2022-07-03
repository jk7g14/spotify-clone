import GradientLayout from '../components/gradientLayout'
import prisma from '../lib/prisma'

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="green"
      image="aaa.png"
      subtitle="profile"
      title="Scott Moss"
      description="15 public playlists"
    >
      <div>home page</div>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home

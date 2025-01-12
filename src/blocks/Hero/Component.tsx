import { Media } from '@/payload-types'

type Props = {
  content: string
  image: Media
  title: string
}

const HeroBlock = ({ content, image, title }: Props) => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${image.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          width: '100%',
        }}
      >
        <div className="bg-gray-900 bg-opacity-50 h-full">
          <div className="h-full pl-5 flex items-start justify-center text-center text-white flex-col gap-1">
            <h1 className="text-6xl">{title}</h1>
            <p className="text-1xl">{content}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBlock

interface CampProps {
  backgroundImage:string;
  title: string;
  subtitle: string;
  peopleJoined: string
}


const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] `}>
      Camp site 1
    </div>
  )
};


const Camp = () => {
  return (
    <section className='border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:mb-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Ouachita National Forest"
          subtitle="Hodgen, OK"
          peopleJoined="50+ joined"
        />
        <CampSite/>
      </div>
    </section>
  )
}

export default Camp
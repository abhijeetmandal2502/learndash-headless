import { getCourses } from "apis/AllPostApi";
import SideMenu from "components/SideMenu"
import SimplyChoose from "components/SimplyChoose"

const Courses = (props)=>{
    const courseData = props.allCourse;
    return(
    <>
<div className={`bg-[url('/images/start-bg.png')] absolute top-0 bg-cover bg-center bg-no-repeat md:col-span-12 w-full  grid grid-cols-12`}>
                    <div className={`col-span-12 md:col-span-11`}>
                        <SimplyChoose courseData={courseData}/>
                    </div>
                    <div className={`col-span-12 p-4 hidden  max-sm:invisible md:col-span-1 md:flex items-center relative h-screen w-full border-l border-bodergray`}>
                        <SideMenu  />
                    </div>
                </div>
    </>
    )
}

export default Courses

export async function getServerSideProps() {
    const [allCourse] = await Promise.all([
        getCourses()
    ])
    return {
        props: {
            allCourse,

        }
    }
}
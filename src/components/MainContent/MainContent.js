import './MainContent.css'
export const MainContent = () => {
    const blogItems = [
        {title:'lorem', description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur perspiciatis sit quia numquam deleniti nihil `},
        {title:'lorem', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur perspiciatis sit quia numquam deleniti nihil"},
        {title:'lorem', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur perspiciatis sit quia numquam deleniti nihil "},
        {title:'lorem', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur perspiciatis sit quia numquam deleniti nihil"},
        {title:'lorem', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur perspiciatis sit quia numquam deleniti nihil"},
        {title:'lorem', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur perspiciatis sit quia numquam deleniti nihil"},
        {title:'lorem', description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur perspiciatis sit quia numquam deleniti nihil"},
    ]
    return (
        <main>
        {blogItems.map((item) => (
            <div className='post'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        ))}
         </main>
    )
}
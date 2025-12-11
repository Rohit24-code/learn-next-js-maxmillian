import React from 'react'


// @ before a folder name means that it is a parallel route
// over here we will receive two props: archive and latest 
// same as folder name @archive and @latest 
// now both route loads at the same time
const ArchiveLayout = ({ archive, latest }) => {
    return (
        <div>

            <section id='archive-filter'>
                {archive}
            </section>
            <br />
            <section id='archive-latest'>
                {latest}
            </section>
        </div>
    )
}

export default ArchiveLayout
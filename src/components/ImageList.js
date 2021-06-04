import React from 'react';


export default (props) => {
    console.log(props.images)
    const photos = props.images.map((image) => {
        return <img src={image.urls.small} alt={image.alt_description} key={image.id} />
    })
    return (

        <>
            {photos}
        </>

    )


}
import React from 'react';
import Card from './Card';
import Images from '../apifolder/images';



function Collections(){
    const collectionSection={
        backgroundColor: "white",
        margin: "0 -40px",
        padding: "10px 0",
    }

    const collectionImg={
        margin: "60px 40px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",

    }

    const collectionHeader={
        marginTop: "80px",
        fontSize: "2em",
        textAlign: "center",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    }
    return(
        <div style={collectionSection}>
            <h1 style={collectionHeader}>NEW COLLECTIONS</h1>
            
            <div style={collectionImg}>
                {Images.map(Images => (
                    <Card
                        key={Images.id}
                        src={Images.src}
                        alt={Images.alt} 
                    /> 
               ))}

            </div>
       </div>
    );
}

export default Collections;
import { useState } from "react";





export default function EmojiStore(){
    const [emojiStore, setEmojiStore] = useState([]);

    const addEmoji = (emoji) =>{
        setEmojiStore([...emojiStore, emoji]
            // This will return the old array and the new stuff
            /* emojiStore.push(emoji)
            // To add something to an array, you push it.
            THE PROBLEM WITH THIS IS THAT IT DOES NOT RETURN THE NEW ARRAY 
             */
            );
    };
    return(
        <div>
            <h2>Emoji Store</h2>
            <button onClick={() => addEmoji("☺")}>Add face</button>
            <button onClick={() => addEmoji("☻")}>Add albine face</button>
            <button onClick={() => addEmoji("♥")}>Add Love</button>
            <br />
            <button onClick={() => setEmojiStore([])}>Empty the store</button>
            <ul>
                {emojiStore.map((emoji, index) => 
                (<li 
                    style={{listStyleType: "none" 
                        // This is to take put the dot on the side
                    }}
                key={index}>{emoji}</li>))}
            </ul>
        </div>
    );
}

/* 
This is the stuff from the lecture.
I just modify it and stuff

export default function EmojiStore(){
    const [emojiStore, setEmojiStore] = useState([]);

    const addEmoji = (emoji) =>{
        setEmojiStore([...emojiStore, emoji]
            // This will return the old array and the new stuff
             emojiStore.push(emoji)
            // To add something to an array, you push it.
            THE PROBLEM WITH THIS IS THAT IT DOES NOT RETURN THE NEW ARRAY 
             
            );
    };
    return(
        <div>
            <h2>Emoji Store</h2>
            <button onClick={() => addEmoji("☺")}>Add face</button>
            <button onClick={() => addEmoji("☻")}>Add albine face</button>
            <button onClick={() => addEmoji("♥")}>Add Love</button>
            <br />
            <button onClick={() => setEmojiStore([])}>Empty the store</button>
            <ul>
                {emojiStore.map((emoji, index) => 
                (<li 
                    style={{listStyleType: "none" 
                        // This is to take put the dot on the side
                    }}
                key={index}>{emoji}</li>))}
            </ul>
        </div>
    );
} */
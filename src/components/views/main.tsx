import React from 'react';
import Featured from "./Images/Featured/index";
import Newest from "./Images/Newest/index";
import dataJson from '../../utils/data.json'
import '../../styles/main.scss'

function Main() {
    let filteredBestRated = dataJson.sort((a, b) => b.rating - a.rating).slice(0, 5);
    let filteredNewest = dataJson.sort((a, b) => a.age - b.age).slice(0, 2);

    /**
     * Task part 2 put here
     * */

    // 2. Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу.
    const groupedByTags: any = {}
    dataJson.forEach(item => {
        item.tags.forEach(tag => {
            if(!groupedByTags[tag]){
                groupedByTags[tag] = []
            }
            groupedByTags[tag].push(item)
            console.log(`кількість елементів по тегу ${tag} `, groupedByTags[tag].length)
        });
    });
    console.log('група елементів по тегу: ', groupedByTags)

    // 3. Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів.
    const groupedByTagNameLength: any = {}
    dataJson.forEach(item => {
        item.tags.forEach(tag => {
            if(!groupedByTagNameLength[tag.length]){
                groupedByTagNameLength[tag.length] = []
            }
            groupedByTagNameLength[tag.length].push(item)
            console.log(`кількість єлементів по кількості букв з ${tag.length} букв `, groupedByTagNameLength[tag.length].length)
        })
    })
    console.log('група елементів кількісті символів у назві тегу', groupedByTagNameLength)

    return (
        <div className="root">
            <div className="featured">
                <Featured bestImages={filteredBestRated}/>
                <button className="btnLeft">
                    <img src="/assets/icons/back.svg" className="backImg"/>
                </button>
                <button className="btnRight">
                    <img src="/assets/icons/next.svg" className="nextImg"/>
                </button>
            </div>
            <Newest newestImages={filteredNewest}/>
        </div>
    );
}

export default Main;

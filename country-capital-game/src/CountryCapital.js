import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./index.css";

const CountryCapital = ({ data }) => {
    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    const createArray = (data) => {
        const entries = Object.entries(data);
        const list = [];
        entries.forEach(([country, capital], index) => {
            const countryObj = {
                id: nanoid(),
                name: country,
                number: index,
                selected: false,
                matched: false,
            };
            const capitalObj = {
                id: nanoid(),
                name: capital,
                number: index,
                selected: false,
                wrongMatched: false,
            };

            list.push(countryObj, capitalObj);
        });

        return shuffleArray(list);
    };

    const [nameList, setNameList] = useState(createArray(data));
    const [times, setTimes] = useState(0);

    const handleClick = (id) => {
        if (times === 0) {
            const newList = nameList.map((item) =>
                item.id === id
                    ? { ...item, selected: true, wrongMatched: false }
                    : { ...item, selected: false, wrongMatched: false }
            );
            setNameList(newList);
            setTimes((prev) => prev + 1);
        } else {
            const prevSelectedButton = nameList.find((item) => item.selected === true);
            const currentSelectedButton = nameList.find((item) => item.id === id);

            if (prevSelectedButton.id === currentSelectedButton.id) {
                return;
            }

            if (prevSelectedButton.number === currentSelectedButton.number) {
                const newNameList = nameList.filter(
                    (item) => item.id !== prevSelectedButton.id && item.id !== currentSelectedButton.id
                );
                setNameList(newNameList);
                setTimes(0);
            } else {
                const newList = nameList.map((item) =>
                    item.id === prevSelectedButton.id || item.id === id
                        ? { ...item, selected: true, wrongMatched: true }
                        : item
                );
                setNameList(newList);
                setTimes(0);
            }
        }
    };

    if (Object.keys(data).length === 0) {
        return <div className="no-data-message">No data available</div>;
    }

    return (
        <div className="button-container">
            {nameList.length === 0 ? (
                <div>Congratulations, you won!</div>
            ) : (
                nameList.map((item) => (
                    <button
                        key={item.id}
                        className={item.selected ? (item.wrongMatched ? "button-red" : "button-blue") : ""}
                        onClick={() => handleClick(item.id)}
                    >
                        {item.name}
                    </button>
                ))
            )}
        </div>
    );
};

export default CountryCapital;

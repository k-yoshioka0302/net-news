import React from 'react';
import axios from "../axios";

export const Row = ({ fetchUrl }: { fetchUrl: string }) => {
    async function fetchData() {
        const requests = await axios.get(fetchUrl);
        console.log(requests); // 取得したデータを使用する例
    }
    fetchData();

    return <div className="Row" />;
};
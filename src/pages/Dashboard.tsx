import { cards } from "../assets/constants";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

const Dashboard = () => {
    const [greeting, setGreeting] = useState("");


    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Good morning");
        else if (hour < 18) setGreeting("Good afternoon");
        else setGreeting("Good evening");
    }, []);

    return (
        <div className="w-full p-6 space-y-2 md:space-y-0 md:px-8">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {greeting}, Admin
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
                <Button>
                    View Reports
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        className="transition-all duration-300 hover:shadow-lg rounded-xl border border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {card.label}
                            </CardTitle>
                            <card.Icon
                                className={`h-6 w-6 ${card.iconColor} transition-transform duration-300 transform hover:scale-110`}
                            />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {card.value}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

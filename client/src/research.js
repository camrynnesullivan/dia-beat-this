// This is where we will export all of the research on type 2 diabetes.  We can style it in the files where we import it.

const normalLevels = {
    "Before a meal": "80 mg/dL to 130 mg/dL",
    "After a meal": "130 mg/dL to 180 mg/dL"
};

const lowLevels = {
    "Before a meal": "<80 mg/dL",
    "After a meal": "<130 mg/dL"
};

const highLevels = {
    "Before a meal": ">130 mg/dL",
    "After a meal": ">180 mg/dL"
};

const causesHBS = {
    title: "Causes of High Blood Sugar",
    subtitle: "Keep track of when you have high and low blood sugar, and tell your doctor.  It may be a sign your treatment needs to change.",
    causes: [
        "eating more than you planned",
        "stress",
        "exercising less than usual",
        "being sick",
        "eating too many carbohydrates"
    ]
};

const causesLBS = {
    title: "Causes of Low Blood Sugar",
    subtitle: "Keep track of when you have high and low blood sugar, and tell your doctor.  It may be a sign your treatment needs to change.",
    causes: [
        "some diabetes medicines",
        "taking the wrong amount of diabetes medicine, or taking it at the wrong time",
        "skipping meals or waiting too long between meals",
        "exercising more often or at a different time",
        "drinking alcohol"
    ]
};

const symptomsHBS = {
    title: "Signs of High Blood Sugar",
    subtitle: "Diabetes causes your blood sugar to be too high, but once you start treatment, it can also get too low.  Work with your doctor so that you know the signs and how to treat them.",
    symptoms: [
        {
            fontAwesomeClassname: "faMeh",
            symptomName: "Headaches"
        },
        {            
            fontAwesomeClassname: "faEyeSlash",
            symptomName: "Blurred vision"
        },
        {
            fontAwesomeClassname: "faGlassWhiskey",
            symptomName: "Being thirsty"
        },
        {
            fontAwesomeClassname: "faBed",
            symptomName: "Feeling tired"
        },
        {
            fontAwesomeClassname: "faToilet",
            symptomName: "Urinating more often"
        }
    ]
}

const symptomsLBS = {
    title: "Signs of Low Blood Sugar",
    subtitle: "Diabetes causes your blood sugar to be too high, but once you start treatment, it can also get too low.  Work with your doctor so that you know the signs and how to treat them.",
    symptoms:[
        {
            fontAwesomeClassname: "faQuestion",
            symptomName: "Confusion"
        },
        {    
            fontAwesomeClassname: "", 
            symptomName: "Lightheadedness or dizziness",
        },
        { 
            fontAwesomeClassname: "faLowVision",
            symptomName: "Blurred vision"
        },
        {
            fontAwesomeClassname: "faPizzaSlice",
            symptomName: "Hunger or nausea"
        },
        {
            fontAwesomeClassname: "faHeartbeat",
            symptomName: "Fast heartbeat"
        },
        {
            fontAwesomeClassname: "faTemperatureLow",
            symptomName: "Shakiness, sweating, or chills"
        },
        {
            fontAwesomeClassname: "faBed",
            symptomName: "Feeling tired"
        },
        {
            fontAwesomeClassname: "faAngry",
            symptomName: "Being irritable or impatient"
        },
        {
            fontAwesomeClassname: "faTired",
            symptomName: "Feeling nervous or anxious"
        }    
    ]
}

const treatingHBS = {
    title: "How to Lower Your Blood Sugar",
    subtitle: "High blood sugar, also known as 'hyperglycemia', can be lowered by doing some of these steps",
    todos: {
        1: "Insulin: Take your insulin to reduce your blood sugar levels.  Be careful, as insulin can take 4 hours to be fully absorbed.",
        2: "Walking: Exercise can help to lower blood sugar and walking is a good way of achieve this.",
        3: "Drink Water: When your blood sugar levels are running high, your body will try to flush excess sugar our of your blood through the urine.  Drinking water helps!"
    },
    warning: "Always consult with your doctor when your blood sugar levels fluctuate."
}

const treatingLBS = {
    title: "How to Raise Your Blood Sugar",
    subtitle: "Low blood sugar, also known as 'hypoglycemia', can be raised by doing some of these steps",
    todos: {
        1: "The 15-15 Rule: Have 15 grams of carbohydrates to raise your blood sugar and check it after 15 minutes.  If it's still below 70 mg/dL, have another serving.",
        2: "Take 4 glucose tablets.",
        3: "Drink 4 ounces of regular soda, not diet soda.",
        4: "Eat 4 pieces of hard candy."
    },
    warning: "Always consult with your doctor when your blood sugar levels fluctuate."
}

const complications = {
    title: "Complications of Type 2 Diabetes",
    subtitle: "If your diabetes is not controlled, it can slowly affect other parts of your body over time.  Work with your doctor to help prevent or delay complications.  Read more below.",
    listOfComps:[
        {
            name: "Heart disease and stroke",
            description: "Having high blood pressure and/or high cholesterol increases your risk of a heart attack, stroke, and other heart and vascular diseases.",
            recommendation: "Make sure to get your blood pressure checked at every visit, and your cholesterol check at least once a year.  If your numbers are too high, your doctor can recommend medicine or lifestyle changes.",
            video: "https://www.youtube.com/watch?v=t8FF6OESqVQ",
            image: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80",
            imageText: "heart model"
        },
        {
            name: "Kidney Disease",
            description: "High blood sugar over many years can damage your kidneys and cause them to not work well or stop working completely.",
            recommendation: "Ask your doctor about screening for kidney damage.  If you're at risk, medicines and diet changes can help.",
            video: "https://www.youtube.com/watch?v=KfeKUHGJM1s",
            image: "https://images.unsplash.com/photo-1559757175-9e351c9a1301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
            imageText: "kidney model"
        },
        {
            name: "Eye Diseases",
            description: "Poorly controlled diabetes increases your risk of several eye-related conditions, including glaucoma, cataracts, and retinopathy.",
            recommendation: "Schedule yearly visits with your eye doctor to spot changes early so you can treat them.",
            video: "https://www.youtube.com/watch?v=X17Q_RPUlYo",
            image: "https://images.pexels.com/photos/1651332/pexels-photo-1651332.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageText: "brown eye"
        },
        {
            name: "Neuropathy (nerve damage)",
            description: "High blood sugar over long periods of time can damage your nerves.  The most common type happens in your legs and feet (called peripheral neuropathy).  Symptoms include pain, sensitivity, and numbness.",
            recommendation: "Ask your doctor how to care for your feet, and report any changes right away.  Also have your doctor check your feet at each visit, and get a complete foot exam once a year.",
            video: "https://www.youtube.com/watch?v=qQLz_LqGMOM",
            image: "https://images.unsplash.com/photo-1508387104394-d13e1b497f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80",
            imageText: "foot model"
        },
        {
            name: "Gum Disease",
            description: "Having diabetes and high blood sugar puts you more at risk for bacterial infections, so your gum health can suffer.",
            recommendation: "Brush and floss daily, and see your dentist twice a year for cleanings and checkups.",
            video: "https://www.youtube.com/watch?v=8s5a73Ccy7Y",
            image: "https://images.unsplash.com/photo-1473232117216-c950d4ef2e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2213&q=80",
            imageText: "teeth model"
        }
    ]
}

const careSchedule = {
    "Every Day": [
        {
            title: "Check Your Blood Sugar",
            description: "Check up to several times a day, as directed by your doctor.  Keep a record of your numbers and share them with your health care team during your next visit."
        },
        {
            title: "Check the Bottoms of Your Feet",
            description: "Use a mirror if you can't see the bottom of your feet or ask a family member/caretaker for help.  Let your doctor know immediately if you have any cuts, redness, swelling, sores, blisters, corns, calluses, or other change to the skin or nails."
        },
        {
            title: "Take Your Diabetes Medicine(s)",
            description: "Take the amount prescribed by your doctor, even when you feel good."
        },
        {
            title: "Exercise",
            description: "Get at least 2 and a half hours of moderate activity per week, such as brisk walking or riding a bike.  It is important to raise your heart rate."
        },
        {
            title: "Eat Healthy",
            description: "Eat healthy foods that give you the nutrition you need and help your blood sugar stay in your target range."
        }
    ],
    "Every 3 Months": [
        {
            title: "A1C Test",
            description: "If your treatment has changed or if you're having trouble meeting your blood sugar goals, test your A1C every 3 months."
        },{
            title: "Visit Your Doctor",
            description: "If you're having trouble meeting your treatment goals, visit your doctor every 3 months.  Your blood pressure and weight will be checked, and your self-care plan and medicines will be reviewed.  Ask your doctor to check your feet if you've ever had diabetes-related foot problems."
        }
    ],
    "Every 6 Months": [
        {
            title: "Dental Exam",
            description: "Get your teeth and gums cleaned at least once a year (more often if your doctor recommends), and let your dentist know that you have diabetes."
        },
        {
            title: "A1C Test",
            description: "If you're meeting your teatment and blood sugar goals, have this test every 6 months."
        },
        {
            title: "Visit Your Doctor",
            description: "If you're meeting your treatment goals, visit your doctor every 6 months.  Your blood pressure and weight will be checked, and your self-care plan and medicines will be reviewed.  Ask your doctor to check your feet if you've ever had diabetes-related foot problems."
        }
    ],
    "Every Year": [
        {
            title: "Flu Shot",
            description: "Get your yearly flu shot."
        },
        {
            title: "Kidney Tests",
            description: "Talk to your doctor about checking your kidneys once a year."
        },
        {
            title: "Cholesterol Test",
            description: "Talk to you doctor about checking your cholesterol levels once a year, or more frequently if you have high cholesterol."
        },
        {
            title: "Dilated Eye Exam",
            description: "You may need this exam more often if you have diabetes-related eye problems."
        },
        {
            title: "Complete Foot Check",
            description: "You may need this foot check more often if you have ever had diabetes-related foot problems."
        }
    ],
    "Just Once": [
        {
            title: "Pneumonia Shot",
            description: "Get a pneumonia shot as an adult before you're 65.  You'll need two more doses when you're 65 or older."
        },{
            title: "Hepatitis B Shot",
            description: "Get a hepatitis B shot if you're 60 or younger and haven't had the shot before.  Talk to your doctor about getting the shot if you're over 60."
        }
    ],
    "As Needed": [
        {
            title: "Mental Health Check",
            description: "Your mental health is just as important as your physical health.  If you're feeling sad or hopeless, let your doctor know right away so that you can get the help that you need."
        },
        {
            title: "New symptoms or health problems",
            description: "If you notice new halth problems or if existing problems are getting worse, call your doctor immediately so that you can be evaluated."
        }
    ]
}

const sources = {
    "American Diabetes Association": "https://www.diabetes.org",
    "Centers for Disease Control and Prevention": "https://www.cdc.gov",
    "National Diabetes Education Program": "https://www.ndep.nih.gov",
    "'Today, my type 2 diabetes...' Guide": "PatientPoint",
    "National Kidney Foundation": "https://www.kidney.org",
    "National Eye Institute": "https://www.nei.nih.gov",
    "University of Michigan School of Dentistry": "https://www.dent.umich.edu",
    "Diabetes.co.uk": "https://www.diabetes.co.uk"
}

export { normalLevels, lowLevels, highLevels, causesHBS, causesLBS, symptomsHBS, symptomsLBS, treatingHBS, treatingLBS, complications, careSchedule, sources };
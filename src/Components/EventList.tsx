import React from 'react';
import EventItem from './EventItem';

interface Props {}

interface Routine {
  name: string;
  description: string;
}

interface User {
  name: string;
}

interface Event {
  title: string;
  routine: Routine[];
  location: string;
  time: string;
  Participant: User[];
  user: User;
}

const sampleEvents: Event[] = [
  {
    title: 'Chest Maniac',
    routine: [
      { name: 'Bench Press', description: '3-4 sets of 8-10 reps' },
      { name: 'Incline Bench Press', description: '3-4 sets of 8-10 reps' },
      { name: 'Decline Bench', description: '3-4 sets of 8-10 reps' },
      {
        name: 'Flat Dumbbell Bench Press',
        description: '3-4 sets of 8-10 reps'
      },
      {
        name: 'Incline Dumbbell Bench Press',
        description: '3-4 sets of 8-10 reps'
      },
      {
        name: 'Decline Dumbbell Bench Press',
        description: '3-4 sets of 8-10 reps'
      },
      {
        name: 'Flat, Incline and/or Decline Machine Press',
        description: '3-4 sets of 8-10 reps'
      },
      { name: 'Push-Ups', description: '3-4 sets of 8-10 reps' },
      { name: 'Dumbbell Fly', description: '3-4 sets of 8-10 reps' },
      { name: 'Pec Deck', description: '3-4 sets of 8-10 reps' },
      { name: 'Cable Crossover', description: '3-4 sets of 8-10 reps ' }
    ],
    location: 'LA Fitness',
    time: '14: 30 Fri Apr 24 2020',
    Participant: [{ name: 'test' }],
    user: { name: 'John Appleseed' }
  },
  {
    title: 'Casule Abs Workout',
    routine: [
      { name: 'Sit-Up', description: '3-4 sets of 20 reps' },
      { name: 'Leg Raise', description: '3-4 sets of 8-10 reps' },
      { name: 'Crunch', description: '3-4 sets of 8-10 reps' },
      {
        name: 'Reverse Crunch',
        description: '3-4 sets of 8-10 reps'
      }
    ],
    location: 'Planet Fitness',
    time: '15: 30 Fri Apr 29 2020',
    Participant: [{ name: 'test' }],
    user: { name: 'Malik Johnson' }
  },
  {
    title: 'Back Maniac',
    routine: [
      { name: 'DeadLift', description: '3-4 sets of 8-10 reps' },
      { name: 'Pull Up', description: '3-4 sets of 8-10 reps' },
      { name: 'Chin up', description: '3-4 sets of 8-10 reps' },
      {
        name: 'Lat Pulldown',
        description: '3-4 sets of 8-10 reps'
      }
    ],
    location: 'LA Fitness',
    time: '14: 30 Fri Apr 24 2020',
    Participant: [{ name: 'test' }],
    user: { name: 'Justin Howard' }
  }
];

const EventList: React.FC<Props> = () => {
  return (
    <>
      <h1 className="title">Nearby Events:</h1>
      {sampleEvents.map((event) => (
        <EventItem key={Math.random()} event={event} />
      ))}
    </>
  );
};
export default EventList;

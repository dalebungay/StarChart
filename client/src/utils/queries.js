import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      createdEvents {
        _id
        title
        description
        date
      }
    }
  }
`;

// Get an Event based on the event ID
export const QUERY_SINGLE_EVENT = gql`
  query getSingleEvent($eventId: ID!) {
    event(eventId: $eventId) {
      _id
      title
      description
      date
      creator
    }
  }
`;

// Get an Event based on the event ID
export const QUERY_EVENTS = gql`
  query getEvents {
    events {
      _id
      title
      description
      date
      creator
    }
  }
`;
export type BetTicket = Category[];

export type Category = {
  title: string;
  content: TicketInfo[];
  contentNested: NestedItem[];
  type: string;
};

export type TicketInfo = {
  ticketNumber: string;
  matchDate: string;
  matchDetails: string;
};

export type NestedItem = {
  title: string;
  content: string[];
};

const betTickets: BetTicket = [
  {
    title: 'Football',
    content: [
      {
        ticketNumber: 'TKT001',
        matchDate: '2024-04-20',
        matchDetails: 'Manchester United vs. Liverpool',
      },
      {
        ticketNumber: 'TKT002',
        matchDate: '2024-04-21',
        matchDetails: 'Real Madrid vs. Barcelona',
      },
    ],
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'Basketball',
    content: [
      {
        ticketNumber: 'TKT003',
        matchDate: '2024-04-22',
        matchDetails: 'Los Angeles Lakers vs. Brooklyn Nets',
      },
      {
        ticketNumber: 'TKT004',
        matchDate: '2024-04-23',
        matchDetails: 'Golden State Warriors vs. Miami Heat',
      },
    ],
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'Tennis',
    content: [
      {
        ticketNumber: 'TKT005',
        matchDate: '2024-04-24',
        matchDetails: 'Novak Djokovic vs. Rafael Nadal',
      },
      {
        ticketNumber: 'TKT006',
        matchDate: '2024-04-25',
        matchDetails: 'Serena Williams vs. Naomi Osaka',
      },
    ],
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'Boxing',
    content: [
      {
        ticketNumber: 'TKT007',
        matchDate: '2024-04-26',
        matchDetails: 'Tyson Fury vs. Anthony Joshua',
      },
      {
        ticketNumber: 'TKT008',
        matchDate: '2024-04-27',
        matchDetails: 'Canelo Alvarez vs. Gennady Golovkin',
      },
    ],
    contentNested: [],
    type: 'regular',
  },
];

export default betTickets;

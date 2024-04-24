import { Component } from '@angular/core';
import { League } from '../Model/League';

@Component({
  selector: 'league-details',
  templateUrl: './league-details.component.html',
  styleUrl: './league-details.component.css'
})
export class LeagueDetailsComponent {
  displayedColumns: string[] = ['league', 'player', 'paymentdate', 'paid', 'comp'];
  ELEMENT_DATA: League[] = [
    { league: 'Test League', player: 'Travis Kruse', paymentdate: '01/02/2024', paid: 1.00, comp: 0.20 },
    { league: 'Test League', player: 'Travis Kruse', paymentdate: '01/02/2024', paid: 1.00, comp: 0.20 },
    { league: 'Test League', player: 'Travis Kruse', paymentdate: '01/02/2024', paid: 1.00, comp: 0.20 },
    { league: 'Test League', player: 'Travis Kruse', paymentdate: '01/02/2024', paid: 1.00, comp: 0.20 },
  ];
  dataSource = this.ELEMENT_DATA;

}

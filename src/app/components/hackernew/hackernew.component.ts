import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HackernewService } from '../../services/hackernew.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-hackernew-component',
  templateUrl: './hackernew.component.html',
  styleUrls: ['./hackernew.component.css']
})
export class HackernewComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['Title', 'Author', 'Created At', 'Delete'];
  
  constructor(private hackernewService: HackernewService, 
              private changeDetectorRefs: ChangeDetectorRef) { 
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.refresh();
  }
  
  refresh() {
    this.hackernewService.getHackerNews().subscribe(data => {
      this.dataSource = new MatTableDataSource(data as any[]);
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
    });
  }

  deactivateHackerNew(hackernewId: String) {
    this.hackernewService.deactivateHackerNew(hackernewId).subscribe(() => { 
      this.refresh();
    });
  }
}

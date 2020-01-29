import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LanlordsService } from 'src/app/services/lanlords.service';

import { Category } from 'src/app/models/category.model';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: [ './category.component.css' ]
})
export class CategoryComponent implements OnInit {
	addcategoryForm: FormGroup;
	categories: Category[];
	constructor(private landlordService: LanlordsService, private fb: FormBuilder, private propertiesService: PropertiesService) {}

	ngOnInit() {
		this.addcategoryForm = this.fb.group({
			name: [ '', Validators.required ]
		});

		this.getAllcategories();
	}
	getAllcategories() {
		this.propertiesService.getCategories().subscribe((actionArray) => {
			this.categories = actionArray.map((item) => {
				return {
					id: item.payload.doc.id,
					...item.payload.doc.data()
				} as Category;
			});
		});
	}
	onAdd() {
		this.propertiesService.createCategory(this.addcategoryForm.value['name']);
	}
}

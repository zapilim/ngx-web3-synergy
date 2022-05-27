export const BasicInputCodeHtml = `<div class="doc-grid-container">
  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">Default</h5>

    <div>
      <auc-input [(ngModel)]="defaultVal"></auc-input>

      <div class="doc-ex-val">
        Value: {{defaultVal}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">Disabled</h5>

    <div>
      <auc-input [disabled]="true" [(ngModel)]="disabledVal"></auc-input>

      <div class="doc-ex-val">
        Value: {{disabledVal}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">With Label</h5>

    <div>
      <auc-input label="Field Label" [(ngModel)]="withLabelVal"></auc-input>

      <div class="doc-ex-val">
        Value: {{withLabelVal}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">With Placeholder</h5>

    <div>
      <auc-input label="Field Label"
                 placeholder="Enter"
                 [(ngModel)]="withPlaceholderVal"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{withPlaceholderVal}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">With Hint</h5>

    <div>
      <auc-input label="Field Label"
                 placeholder="Enter"
                 hint="This is a hint message"
                 [(ngModel)]="withHintVal"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{withHintVal}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">Number field</h5>

    <div>
      <auc-input label="Field Label"
                 placeholder="Enter"
                 type="number"
                 [(ngModel)]="withDecimalVal"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{withDecimalVal}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">Not Decimals</h5>

    <div>
      <auc-input label="Field Label"
                 placeholder="Enter"
                 type="number"
                 [decimal]="false"
                 [(ngModel)]="nonDecimalsVal"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{nonDecimalsVal}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">With suffix</h5>

    <div>
      <auc-input label="Field Label"
                 placeholder="Enter"
                 type="number"
                 [suffix]="suffix"
                 [(ngModel)]="withSuffixVal"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{withSuffixVal}} {{suffix}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">With Prefix</h5>

    <div>
      <auc-input label="Field Label"
                 placeholder="Enter"
                 type="number"
                 [prefix]="prefix"
                 [(ngModel)]="withPrefixVal"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{withPrefixVal}} {{prefix}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">Custom Height</h5>

    <div>
      <auc-input label="Field Label"
                 placeholder="Enter"
                 [height]="55"
                 [(ngModel)]="customHeightVal"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{customHeightVal}}
      </div>
    </div>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">Full width</h5>

    <div class="full-width">
      <auc-input label="Field Label"
                 placeholder="Enter"
                 [adaptive]="true"
                 [(ngModel)]="fullWidthVal"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{fullWidthVal}}
      </div>
    </div>
  </div>
</div>
`;

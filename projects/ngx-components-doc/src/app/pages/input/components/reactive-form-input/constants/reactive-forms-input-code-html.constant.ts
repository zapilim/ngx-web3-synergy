export const ReactiveFormsInputCodeHtml = `<div class="doc-grid-container">
  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">Default</h5>

    <form class="full-width" [formGroup]="form">
      <auc-input label="Field Label"
                 placeholder="Enter"
                 formControlName="field"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{form.get('field')?.value}}
      </div>
    </form>
  </div>

  <div class="doc-grid-item full-width">
    <h5 class="doc-grid-item-title">Invalid fields</h5>

    <form class="full-width" [formGroup]="form">
      <auc-input label="Field Label"
                 placeholder="Enter"
                 formControlName="requiredField"
                 [errors]="form.get('requiredField').invalid ? ['This is required field.', 'Please enter value.'] : null"
      >
      </auc-input>

      <div class="doc-ex-val">
        Value: {{form.get('requiredField')?.value}}
      </div>
    </form>
  </div>
</div>
`;
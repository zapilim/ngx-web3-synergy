export const BasicCopyToClipboardCodeHtml = `<div class="doc-grid-container">
  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Default</h5>

    <auc-copy-to-clipboard [value]="textToCopy" (action)="copied($event)"></auc-copy-to-clipboard>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Custom Size</h5>

    <auc-copy-to-clipboard value="Some text to copy"
                           class="doc-ctc-custom-size"
                           (action)="copied($event)"
    >
    </auc-copy-to-clipboard>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Custom</h5>

    <div class="doc-custom-copy"
         aucCopyToClipboard
         textToCopy="Custom copy to clipboard"
         (action)="copied($event)"
    >
      Click to copy
    </div>
  </div>
</div>
`;
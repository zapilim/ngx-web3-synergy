export const BasicConnectWalletCodeHtml =
`<div class="doc-grid-container">
  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">Default</h5>

    <auc-connect-wallet (connected)="connected($event)"
                        (disconnected)="disconnected()"
    >
    </auc-connect-wallet>
  </div>

  <div class="doc-grid-item">
    <h5 class="doc-grid-item-title">With balance</h5>

    <auc-connect-wallet [showBalance]="true"
                        (connected)="connected($event)"
                        (disconnected)="disconnected()"
    >
    </auc-connect-wallet>
  </div>
</div>
`;

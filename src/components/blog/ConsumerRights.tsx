const ConsumerRights = () => {
  return (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
          Основные права потребителей
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              Право на безопасность товара, работы и услуги (ст. 7 Закона)
            </h3>
            <p>
              Товар (работа, услуга) при обычных условиях использования, хранения, транспортировки и утилизации должен быть безопасным для жизни, здоровья, имущества потребителя и окружающей среды.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              Право на качество товара, работы или услуги (ст. 4 Закона)
            </h3>
            <p>
              Продавец или исполнитель обязаны передать покупателю товар или услугу, качество которых полностью отвечает условиям договора. При отсутствии в договоре условий о качестве — соответствовать обычно предъявляемым требованиям и быть пригодным для целей, для которых товар (работа, услуга) такого рода обычно используется.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              Право на информацию (ст. 10 Закона)
            </h3>
            <p>
              Изготовитель, исполнитель, продавец обязаны предоставить потребителю полную и достоверную информацию о товаре, работе, услуге, а также о себе (наименование, адрес, режим работы и т. д.). Эта информация должна обеспечивать возможность правильного выбора.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              Право на возмещение ущерба (ст. 13 Закона)
            </h3>
            <p>
              При нарушении прав потребителя продавец или исполнитель несёт ответственность, предусмотренную законом или договором, и должен возместить ущерб, неустойку, пени или оплатить штраф.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              Право на компенсацию морального вреда (ст. 15 Закона)
            </h3>
            <p>
              Потребитель вправе требовать компенсации морального вреда при нарушении его прав. Размер компенсации определяет суд.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              Право на обмен товара надлежащего качества (ст. 25 Закона)
            </h3>
            <p>
              Потребитель может обменять непродовольственный товар, если он не подошёл по форме, габаритам, фасону, расцветке, размеру или комплектации, в течение 14 дней с момента покупки (день покупки не входит в срок). Товар должен быть неиспользованным, с сохранёнными пломбами, ярлыками и товарным видом.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              Право при обнаружении недостатков товара (ст. 18 Закона)
            </h3>
            <p className="mb-3">
              Если в товаре обнаружены недостатки, о которых продавец не предупреждал, потребитель вправе:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>потребовать замены на товар этой же марки (модели, артикула);</li>
              <li>потребовать замены на товар другой марки (модели, артикула) с перерасчётом стоимости;</li>
              <li>потребовать соразмерного уменьшения цены;</li>
              <li>потребовать безвозмездного устранения недостатков или возмещения расходов на их исправление;</li>
              <li>отказаться от исполнения договора купли-продажи и потребовать возврата денег.</li>
            </ul>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              Право на судебную защиту (ст. 17 Закона)
            </h3>
            <p>
              Потребитель может обратиться в суд для защиты своих прав. Иск можно подать по месту нахождения организации, месту жительства потребителя, месту заключения или исполнения договора. При этом потребитель освобождается от уплаты государственной пошлины.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
          Способы защиты прав потребителей
        </h2>
        
        <div className="space-y-6">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              1. Досудебный порядок (претензия)
            </h3>
            <p>
              При нарушении прав потребитель должен сначала направить письменную претензию продавцу (изготовителю, исполнителю). В претензии нужно чётко изложить суть проблемы и выдвинуть требования (замена товара, возврат денег, ремонт и т. д.). Продавец обязан ответить в течение 10 дней.
            </p>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              2. Обращение в Роспотребнадзор
            </h3>
            <p>
              Если претензия не удовлетворена, можно обратиться в Федеральную службу по надзору в сфере защиты прав потребителей и благополучия человека (Роспотребнадзор). Ведомство проведёт проверку и может привлечь нарушителя к административной ответственности. Жалобу можно подать лично, через сайт ведомства, «Госуслуги» или заказным письмом.
            </p>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              3. Обращение в другие органы
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Финансовый уполномоченный</strong> — при спорах по финансовым услугам (страхование, банковские услуги и т. д.), если сумма требования не превышает 500 000 рублей.</li>
              <li><strong>Полиция</strong> — если есть основания полагать, что при оказании услуг совершено преступление (например, мошенничество).</li>
              <li><strong>Федеральная антимонопольная служба</strong> — при нарушении законодательства о рекламе или завышении тарифов.</li>
              <li><strong>Госжилинспекция</strong> — при проблемах с управляющей компанией или начислениями за коммунальные услуги.</li>
              <li><strong>Роскомнадзор</strong> — если продавец распространил персональные данные потребителя или рассылает нежелательные сообщения.</li>
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
              4. Судебный порядок
            </h3>
            <p>
              Если досудебные меры не помогли, потребитель вправе подать иск в суд. В исковом заявлении можно требовать не только возврата денег или замены товара, но и компенсации морального вреда, возмещения расходов на экспертизу, штраф за отказ добровольно удовлетворить требования (до 50% суммы иска).
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-secondary/10 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Cormorant, serif' }}>
          Важные рекомендации
        </h2>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-secondary mr-3 text-2xl">✓</span>
            <span><strong>Сохраняйте доказательства покупки:</strong> чеки, договоры, гарантийные талоны, переписку с продавцом. При отсутствии чека можно использовать другие доказательства: свидетельские показания, историю банковских операций.</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-3 text-2xl">✓</span>
            <span><strong>Проверяйте товар при получении.</strong> Осматривайте его на предмет дефектов.</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-3 text-2xl">✓</span>
            <span><strong>Ознакомьтесь с условиями гарантии</strong> и правилами возврата до покупки.</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-3 text-2xl">✓</span>
            <span><strong>При составлении претензии</strong> чётко формулируйте требования со ссылками на соответствующие статьи закона.</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-3 text-2xl">✓</span>
            <span><strong>Если продавец отказывается принять претензию,</strong> отправьте её заказным письмом с уведомлением о вручении.</span>
          </li>
        </ul>

        <div className="mt-6 p-4 bg-white rounded-lg">
          <p className="text-lg">
            <strong>Для получения консультации</strong> по вопросам защиты прав потребителей можно обратиться в Единый консультационный центр Роспотребнадзора по телефону <strong className="text-primary">8-800-555-49-43</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ConsumerRights;

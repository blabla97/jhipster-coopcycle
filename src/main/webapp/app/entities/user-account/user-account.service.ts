import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IUserAccount } from 'app/shared/model/user-account.model';

type EntityResponseType = HttpResponse<IUserAccount>;
type EntityArrayResponseType = HttpResponse<IUserAccount[]>;

@Injectable({ providedIn: 'root' })
export class UserAccountService {
  public resourceUrl = SERVER_API_URL + 'api/user-accounts';

  constructor(protected http: HttpClient) {}

  create(userAccount: IUserAccount): Observable<EntityResponseType> {
    return this.http.post<IUserAccount>(this.resourceUrl, userAccount, { observe: 'response' });
  }

  update(userAccount: IUserAccount): Observable<EntityResponseType> {
    return this.http.put<IUserAccount>(this.resourceUrl, userAccount, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUserAccount>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUserAccount[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
